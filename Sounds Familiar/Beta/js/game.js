// ========  game.js  =========
// Thomas Hills 2025
// -------------------------------------------
// This script implements the core logic of the "Sounds Familiar" game,
// including single-player and turn-based modes, multiple choice, timer,
// background images, and round control.

let availableSongs = [];
let failedSongs = [];
const usedSongs = new Set();

let totalRounds = 0;
let currentRound = 1;
let players = [];
let currentPlayerIndex = 0;

let audioElement = null;
let timerId = null;
let resultTimeoutId = null;
let countdown = 6;

const gameImages = [
  'images/background1.jpg',
  'images/background2.jpg',
  'images/background3.JPG'
];
const finalImage = 'images/final.JPG';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function playBeep(type = 'correct') {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';

  if (type === 'correct') {
    osc.frequency.value = 880; // High-pitched beep
    gain.gain.value = 0.2;
  } else {
    osc.frequency.value = 220; // Low-pitched beep
    gain.gain.value = 0.3;
  }

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.25); // 0.25 seconds
}

function setBackgroundImage(list) {
  const url = list[randomIndex(list.length)];
  document.body.style.backgroundImage = `url('${url}')`;

  if (list.length === 1 && list[0] === finalImage) {
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
  } else {
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }
}

function clearBackground() {
  document.body.style.backgroundImage = '';
}

async function chooseFolder() {
  try {
    if (!('showDirectoryPicker' in window)) {
      alert('Your browser does not support the showDirectoryPicker() API');
      return;
    }

    const dirHandle = await window.showDirectoryPicker();
    availableSongs = [];

    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind === 'file' && name.toLowerCase().endsWith('.mp3')) {
        availableSongs.push({
          title: name.replace(/\.mp3$/i, ''),
          handle
        });
      }
    }

    if (availableSongs.length === 0) {
      alert('No MP3 files found in the selected folder.');
      return;
    }

    $('#numSongs').textContent = `Songs loaded: ${availableSongs.length}`;
    requestConfiguration();
  } catch (err) {
    console.error(err);
    alert('Error accessing the folder.');
  }
}

function requestConfiguration() {
  const maxRounds = availableSongs.length;

  let rounds;
  while (true) {
    const input = prompt(`How many rounds do you want to play? (1 ‑ ${maxRounds})`, '1');
    rounds = parseInt(input, 10);
    if (!isNaN(rounds) && rounds >= 1 && rounds <= maxRounds) break;
    alert(`Please enter a number between 1 and ${maxRounds}.`);
  }
  totalRounds = rounds;

  let numPlayers;
  while (true) {
    const input = prompt('How many players? (1 ‑ 4)', '1');
    numPlayers = parseInt(input, 10);
    if (!isNaN(numPlayers) && numPlayers >= 1 && numPlayers <= 4) break;
    alert('Enter a valid number between 1 and 4.');
  }

  players = [];
  for (let i = 0; i < numPlayers; i++) {
    let name;
    do {
      name = prompt(`Name of player ${i + 1}:`, `Player ${i + 1}`);
    } while (!name || name.trim() === '');
    players.push({ name: name.trim(), points: 0 });
  }

  renderScores();
  $('#selectFolder').style.display = 'none';
  $('#gameZone').style.display = 'block';
  audioElement = $('#audio');
  nextRound();
}

async function nextRound() {
  if (currentRound > totalRounds || availableSongs.length === 0) {
    endGame();
    return;
  }

  $('#round').textContent = currentRound;
  $('#turnInfo').textContent = `Turn: ${players[currentPlayerIndex].name}`;

  const index = randomIndex(availableSongs.length);
  const song = availableSongs[index];

  await playSnippet(song);
  showOptions(song);
  startTimer(() => handleTimeout(song));
}

async function playSnippet(song) {
  try {
    const file = await song.handle.getFile();
    const url = URL.createObjectURL(file);

    setBackgroundImage(gameImages);

    return new Promise((resolve) => {
      audioElement.src = url;
      audioElement.load();
      audioElement.onloadedmetadata = () => {
        const duration = audioElement.duration;
        const snippet = 10;
        let start = 0;
        if (duration > snippet + 5) {
          start = randomIndex(Math.floor(duration - snippet - 5)) + 2;
        }
        audioElement.currentTime = start;
        audioElement.play();

        const bar = $('#timeBar');
        bar.style.transition = 'none';
        bar.style.width = '100%';
        void bar.offsetWidth;
        bar.style.transition = `width ${snippet}s linear`;
        bar.style.width = '0%';

        setTimeout(() => {
          audioElement.pause();
          URL.revokeObjectURL(url);
          bar.style.transition = 'none';
          bar.style.width = '0%';
          resolve();
        }, snippet * 1000);
      };
    });
  } catch (e) {
    console.error(e);
    alert('Could not play a snippet. Moving to the next song.');
  }
}

function showOptions(correctSong) {
  const optionsDiv = $('#options');
  optionsDiv.innerHTML = '';

  const options = [correctSong.title];
  const others = availableSongs.filter(s => s.title !== correctSong.title);
  while (options.length < 3 && others.length) {
    const idx = randomIndex(others.length);
    const extra = others.splice(idx, 1)[0].title;
    if (!options.includes(extra)) options.push(extra);
  }

  options.sort(() => Math.random() - 0.5);

  for (const title of options) {
    const btn = document.createElement('button');
    btn.textContent = title;
    btn.classList.add('option-button');
    btn.onclick = () => handleAnswer(title, correctSong);
    optionsDiv.appendChild(btn);
  }
}

function startTimer(onTimeout) {
  countdown = 6;
  $('#timer').textContent = `Time: ${countdown}s`;
  timerId = setInterval(() => {
    countdown--;
    $('#timer').textContent = `Time: ${countdown}s`;
    if (countdown <= 0) {
      clearInterval(timerId);
      onTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  $('#timer').textContent = '';
}

function handleTimeout(song) {
  playBeep('fail');
  showResult(false, song.title, '⏰ Time’s up!');
  continueAfterResult();
}

function handleAnswer(selectedTitle, correctSong) {
  stopTimer();

  $$('#options .option-button').forEach(btn => {
    btn.disabled = true;
  });

  const isCorrect = selectedTitle === correctSong.title;

  if (isCorrect) {
    playBeep('correct');
    players[currentPlayerIndex].points += 1;
    availableSongs = availableSongs.filter(s => s.title !== correctSong.title);
    usedSongs.add(correctSong.title);
  } else {
    playBeep('fail');
    failedSongs.push(correctSong);
  }

  showResult(isCorrect, correctSong.title);
  renderScores();
  continueAfterResult();
}

function showResult(correct, title, extraText = '') {
  const res = $('#result');
  res.textContent = correct ? `✅ Correct! It was "${title}".` : `❌ Wrong. It was "${title}".`;
  if (extraText) res.textContent += '\n' + extraText;
}

function continueAfterResult() {
  resultTimeoutId = setTimeout(() => {
    const moreRounds =
      currentRound < totalRounds || (currentPlayerIndex + 1) % players.length !== 0;

    if (moreRounds) {
      $('#nextWarning').textContent = 'Next song in 3 seconds…';
    }

    setTimeout(() => {
      $('#result').textContent = '';
      $('#nextWarning').textContent = '';
      $('#options').innerHTML = '';
      clearBackground();
      advanceTurn();
      nextRound();
    }, 3000);
  }, 5000);
}

function advanceTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  if (currentPlayerIndex === 0) {
    currentRound += 1;
  }
}

function renderScores(final = false) {
  const container = $('#scores');
  container.innerHTML = '';
  players.forEach((p) => {
    const el = document.createElement('p');
    el.textContent = `${p.name}: ${p.points} point(s)`;
    if (final) el.classList.add('final-score');
    container.appendChild(el);
  });
}

function endGame() {
  setBackgroundImage([finalImage]);

  $('#turnInfo').textContent = 'Game over';
  $('#turnInfo').classList.add('final-text');

  $('#result').textContent = 'Final scores:';
  $('#result').classList.add('final-text');

  $('#round').parentElement.classList.add('final-score');

  renderScores(true);

  $('#options').innerHTML = '';
  $('#timer').textContent = '';
}

window.chooseFolder = chooseFolder;

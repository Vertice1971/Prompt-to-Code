// ======== game.js =========
// Thomas Hills
// ---------------------------------------------

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

const backgroundImages = [
  'images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg'
];
const finalImage = 'images/final.jpg';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function random(max) {
  return Math.floor(Math.random() * max);
}

// (optional) placeholder beep function (sound not implemented yet)
function playBeep(type = 'correct') {
  // sound to be added later
}

function setRandomBackground(list) {
  const url = list[random(list.length)];
  document.body.style.backgroundImage = `url('${url}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
}

function clearBackground() {
  document.body.style.backgroundImage = '';
}

async function pickFolder() {
  try {
    if (!('showDirectoryPicker' in window)) {
      alert('Your browser does not support showDirectoryPicker().');
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

    $('#songCount').textContent = `Songs loaded: ${availableSongs.length}`;
    requestGameSettings();
  } catch (err) {
    console.error(err);
    alert('Error accessing folder.');
  }
}

function requestGameSettings() {
  const maxRounds = availableSongs.length;

  let rounds;
  while (true) {
    const input = prompt(`How many rounds do you want to play? (1 – ${maxRounds})`, '10');
    rounds = parseInt(input, 10);
    if (!isNaN(rounds) && rounds >= 1 && rounds <= maxRounds) break;
    alert(`Please enter a number between 1 and ${maxRounds}.`);
  }
  totalRounds = rounds;

  let numPlayers;
  while (true) {
    const input = prompt('How many players? (1 – 4)', '1');
    numPlayers = parseInt(input, 10);
    if (!isNaN(numPlayers) && numPlayers >= 1 && numPlayers <= 4) break;
    alert('Enter a valid number between 1 and 4.');
  }

  players = [];
  for (let i = 0; i < numPlayers; i++) {
    let name;
    do {
      name = prompt(`Player ${i + 1} name:`, `Player ${i + 1}`);
    } while (!name || name.trim() === '');
    players.push({ name: name.trim(), points: 0 });
  }

  renderScores();
  $('#folderPicker').style.display = 'none';
  $('#gameArea').style.display = 'block';
  audioElement = $('#audioPlayer');
  nextRound();
}

async function nextRound() {
  if (currentRound > totalRounds || availableSongs.length === 0) {
    endGame();
    return;
  }

  $('#roundNumber').textContent = currentRound;
  $('#turnInfo').textContent = `Turn: ${players[currentPlayerIndex].name}`;

  const index = random(availableSongs.length);
  const song = availableSongs[index];

  await playSnippet(song);
  showOptions(song);
  startTimer(() => handleTimeout(song));
}

async function playSnippet(song) {
  try {
    const file = await song.handle.getFile();
    const url = URL.createObjectURL(file);

    setRandomBackground(backgroundImages);

    return new Promise((resolve) => {
      audioElement.src = url;
      audioElement.load();
      audioElement.onloadedmetadata = () => {
        const duration = audioElement.duration;
        const snippetLength = 10;
        let start = 0;
        if (duration > snippetLength + 5) {
          start = random(Math.floor(duration - snippetLength - 5)) + 2;
        }
        audioElement.currentTime = start;
        audioElement.play();

        setTimeout(() => {
          audioElement.pause();
          URL.revokeObjectURL(url);
          resolve();
        }, snippetLength * 1000);
      };
    });
  } catch (e) {
    console.error(e);
    alert('Unable to play snippet. Moving to the next song.');
  }
}

function showOptions(correctSong) {
  const container = $('#options');
  container.innerHTML = '';

  const options = [correctSong.title];
  const others = availableSongs.filter(c => c.title !== correctSong.title);
  while (options.length < 3 && others.length) {
    const idx = random(others.length);
    const extra = others.splice(idx, 1)[0].title;
    if (!options.includes(extra)) options.push(extra);
  }

  options.sort(() => Math.random() - 0.5);

  for (const title of options) {
    const btn = document.createElement('button');
    btn.textContent = title;
    btn.classList.add('option-button');
    btn.onclick = () => handleAnswer(title, correctSong);
    container.appendChild(btn);
  }
}

function startTimer(onTimeout) {
  countdown = 15;
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
  playBeep('error');
  showResult(false, song.title, '⏱ Time’s up!');
  continueAfterResult();
}

function handleAnswer(selectedTitle, correctSong) {
  stopTimer();

  $$('#options .option-button').forEach(btn => {
    btn.disabled = true;
  });

  const correct = selectedTitle === correctSong.title;

  if (correct) {
    playBeep('correct');
    players[currentPlayerIndex].points += 1;
    availableSongs = availableSongs.filter(c => c.title !== correctSong.title);
    usedSongs.add(correctSong.title);
  } else {
    playBeep('error');
    failedSongs.push(correctSong);
  }

  showResult(correct, correctSong.title);
  renderScores();
  continueAfterResult();
}

function showResult(correct, correctTitle, extraText = '') {
  const res = $('#result');
  res.textContent = correct ? `✅ Correct! It was "${correctTitle}".` : `❌ Wrong. It was "${correctTitle}".`;
  if (extraText) res.textContent += '\n' + extraText;
}

function continueAfterResult() {
  resultTimeoutId = setTimeout(() => {
    $('#nextNotice').textContent = 'Next song in 3 seconds…';
    setTimeout(() => {
      $('#result').textContent = '';
      $('#nextNotice').textContent = '';
      $('#options').innerHTML = '';
      clearBackground();
      advanceTurn();
      nextRound();
    }, 3000);
  }, 7000);
}

function advanceTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  if (currentPlayerIndex === 0) {
    currentRound += 1;
  }
}

function renderScores(final = false) {
  const cont = $('#scores');
  cont.innerHTML = '';
  players.forEach(p => {
    const para = document.createElement('p');
    para.textContent = `${p.name}: ${p.points} point(s)`;
    if (final) para.classList.add('final-score');
    cont.appendChild(para);
  });
}

function endGame() {
  setRandomBackground([finalImage]);

  $('#turnInfo').textContent = 'Game over';
  $('#turnInfo').classList.add('final-text');

  $('#result').textContent = 'Final score:';
  $('#result').classList.add('final-text');

  $('#roundNumber').parentElement.classList.add('final-score');

  renderScores(true);

  $('#options').innerHTML = '';
  $('#timer').textContent = '';
}

window.pickFolder = pickFolder;

# Rock, Paper, Scissors, Lizard, or Spock (Final Version)

This is a complete web-based **Rock, Paper, Scissors, Lizard, Spock** game, inspired by the famous expansion of the classic game. It is written in a single self-contained HTML file that can run directly in any modern browser. This version includes visual improvements, expanded logic, and an AI system with three strategies.

## 🧠 Key Features

* Extended gameplay with five options: Rock, Paper, Scissors, Lizard, and Spock.
* Option to select the number of rounds (up to 11).
* Three AI strategies:

  * **Pure randomness**
  * **Mimic the player**
  * **Respond with the previous winning move**
* Score and round number always visible.
* Audio system using the Web Audio API for each outcome.
* Responsive design adapted for mobile, tablets, and desktop.
* Visual emojis (🪨, 🧻, ✂️, 🦎, 🖖) to represent moves.
* Clean, well-organized, self-contained code.

## 🕹️ How to Use

1. Open the `.html` file in any modern browser.
2. Choose how many rounds you want to play.
3. Select an AI strategy from the dropdown menu.
4. Click “Start Game.”
5. Choose your move by clicking one of the five buttons.
6. The game will proceed round by round and show the final result at the end.
7. You can restart the game once the match is over.

## 📄 Code Structure

The HTML file includes:

* **Internal CSS** for visual styling, with responsive design using media queries.
* **Structured HTML** with a setup screen and a gameplay screen.
* **Embedded JavaScript** that handles:

  * The expanded game logic (including the relationships between all five options).
  * The AI move selection according to strategy.
  * Round tracking, scoring, and messaging.
  * The audio system with different tones for each result.

## 🔊 Sound

The game uses the **Web Audio API** to play different sounds when:

* You win a round
* You lose a round
* You draw a round
* The game ends

## 👤 Author

Thomas Hills

## 💡 Suggestions for Improvement

* Add animations or transitions between moves.
* Show a history of previous moves.
* Include a rules section explaining how each option interacts with the others.
* Create a local two-player mode.

## ✅ Project Status

**Final and fully functional version.** Feel free to share it, host it on GitHub Pages, or modify it for your own educational or learning projects.

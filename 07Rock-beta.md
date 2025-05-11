# Rock, Paper or Scissors – Beta Version

This is a classic **Rock, Paper, Scissors** game, programmed in a single HTML file that works directly in the browser, without requiring internet connection or additional installation.

## 📜 Description

The game allows you to choose how many rounds you want to play (between 1 and 11) and face a **simple AI** that selects its move randomly.

Each round has sound effects and displays on screen which move each player has made. At the end, the program declares the final result and offers the option to **restart the game**.

The game is fully adapted for **mobile phones, tablets and computers**, with responsive design and scaling of buttons and text.

## 🧠 Decision Algorithm

The AI chooses between **rock, paper or scissors** randomly. The rules of the game are implemented with a clear structure:

```javascript
const rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
```

This means:
- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper

If both choose the same, it's a tie.

## ✨ Main Features

- 🎮 Clear and responsive interface
- 🔊 Sound effects for each round and at the end of the game
- 📱 Adapted to all screen types
- 🧠 Simple and efficient decision algorithm
- 🧻 Uses **real object emojis**: rock, paper roll, scissors
- 🧪 Fully operational beta version

## 📁 Instructions for Use

1. Download the `.html` file.
2. Open it with a double click or from any browser.
3. Enter the number of rounds.
4. Choose your move by clicking on one of the three buttons.
5. The game will show results, add points and, at the end, display the total score.

## 👨‍💻 Author

Thomas Hills

This game is part of the educational project **"Programming from Scratch"**, where web programming concepts are learned through games, simulations, and educational tools.

## 🔧 Project Status

**Operational Beta Version**  
Works correctly on all devices.  
Pending future expansions such as new game modes, player pattern analysis, or variable strategies for the AI.

## 📤 Sharing and Hosting

You can upload this file to GitHub as a public page or share it as a file. You don't need to install anything. Having a modern browser is enough.

---
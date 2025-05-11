# Rock, Paper, Scissors (Definitive Version)

This is a complete **Rock, Paper, Scissors** web game, programmed in a single self-contained HTML file that can run directly in any browser. The definitive version incorporates all planned functionalities and has passed the beta phase.

## 🧠 Main Features

- Classic game against the machine.
- Ability to select the number of rounds (up to 11).
- Three AI strategies:
  - **Pure chance**
  - **Imitate the player**
  - **Respond with the previous winning move**
- Score and round visible at all times.
- Audio system with Web Audio API for each type of result.
- Responsive visualization adapted to mobiles, tablets, and computers.
- Use of visual emojis (🪨, 🧻, ✂️) to represent moves.
- Clean and well-organized code for easy understanding.

## 🕹️ Instructions for Use

1. Open the `.html` file in any modern browser.
2. Indicate how many rounds you want to play.
3. Choose an AI strategy from the dropdown menu.
4. Click "Start Game".
5. Select your move by clicking one of the buttons: Rock, Paper, or Scissors.
6. The game will progress round by round, and at the end, it will show the overall result.

## 📄 Code Structure

The HTML file contains:

- **Internal CSS** for visual styling, with responsive design using media queries.
- **Structured HTML** with a setup screen and game screen.
- **Embedded JavaScript** that manages:
  - Game logic
  - AI move selection according to strategy
  - Control of rounds, scoring, and messages
  - Audio for key events

## 🔊 Sound

The game uses the **Web Audio API** to emit different sounds when:

- You win a round
- You lose a round
- You tie a round
- The game ends

## 👤 Author
Thomas Hills

## 💡 Suggestions for Improvement

- Add animations between moves
- Include a help or rules button
- Save previous games in localStorage
- Create a local multiplayer version

## ✅ Project Status

**Final and functional version.** You can share it, host it on GitHub Pages, or modify it freely for your own educational or learning projects.

---
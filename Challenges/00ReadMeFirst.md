
# PROGRAMMING CHALLENGES

This folder contains all the solutions to the challenges from the book *“Learn to Program from Scratch (Really) Using Artificial Intelligence”*.
Read these challenges and instructions first, and after finding your own solutions side by side with your favorite AI, compare them with mine, which are included in this document’s folder.

---

## 1. GUESS THE NUMBER

**Functional description of the "Guess the Number" game**

You’re going to program a small guessing game with the following features:

### 1. Start screen with mode selection menu:

* **Easy Mode**: the game tells you if the secret number is higher or lower.
* **Hard Mode**: in addition to "higher" or "lower", it tells you if you're getting closer or further away.

### 2. Initial setup:

* Choose the maximum number of attempts (between 1 and 10).
* Once confirmed, the game starts and settings can't be changed.

### 3. Game flow:

* The program generates a number between 1 and 100.
* The player enters numbers and receives hints.
* Success or failure messages at the end.

### 4. Interface:

* Shows attempts used and remaining.
* Visual messages and sounds for correct/incorrect guesses.

### 5. Restart:

* Button to return to the main menu and restart everything.

---

## 2. MEMORY MATCH GAME

**Functional description of the "Memory Match Game"**

### Game phases:

#### 1. Initial selection:

* Choose the number of pairs (2 to 10).
* Board with twice as many cards (one pair per figure).

#### 2. Game dynamics:

* Cards are hidden by default.
* Flip two per turn. If they match, they stay revealed.
* Different sounds for matches and mismatches.

#### 3. End of game:

* Congratulations message.
* "Restart" button with new pair selection.

### Visual and technical features:

* Responsive grid-based board.
* Shapes made with CSS: circles, stars, hearts...
* 3D flip animation.
* Use of arrays, conditional logic, and modern CSS.

---

### 2 PLUS: DOUBLE EXTRA CHALLENGE – Irregular Verbs in English

**Memory game adapted to review irregular verbs:**

* Cards with:

  * Infinitive + translation
  * Past participle in English
    *Example: `go - ir` ↔ `gone`*

#### Additional requirements:

* Ask for number of players and their names.
* Alternating turns with visible score.
* Sounds via Web Audio API (high and low beeps).
* Final result (individual or competitive).
* Button to return to the main menu.

**Code requirements:**

* Self-contained HTML.
* Good design, no external resources.
* Use of arrays, conditionals, and DOM.

---

### Now in French!

**Version in Passé Composé**

* Infinitive + translation ↔ compound form in French.
  *Example: `aller – ir` ↔ `je suis allé`*

#### Same as the English version, but with:

* Compound participles: `je suis/j’ai + participle`
* Max of 15 pairs for playability.
* All previous effects and features included.

---

## 3. “FIX THE TITLED 99…” CHALLENGES

**Files:** Hangman, Click, Simon, Tank, Tic Tac Toe.
**Goal:** Review, debug, improve. Use your AI as an ally!

### Some ideas:

* **Hangman**: revise animations (legs…).
* **Click**: improve dynamics and visibility.
* **Simon**: check error tolerance.
* **Tank**: enhance UI, add another tank, damage bar.
* **Tic Tac Toe**: interface, colors, animations, difficulty.

---

## 4. THREE CHALLENGES BASED ON THE MULTIPLE TEST ENGINE

### First challenge:

**Create self-contained versions of tests by topic.**

* Insert the JSON directly into the HTML.
* Avoid needing to load separate files.

### Second challenge:

**True/false test**

* Modify HTML + JSON structure.
* Statement + boolean field.

### Third challenge:

**Penalty for incorrect answers**

* Based on number of options:

  * 3 options → -0.5 per mistake
  * 4 options → -0.33 per mistake
  * T/F → -1 per mistake

**Result:**
A more demanding, fairer test, more like a real exam.

---

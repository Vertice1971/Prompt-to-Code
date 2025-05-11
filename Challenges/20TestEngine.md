````markdown
# True/False Quiz (Adapted for U.S. High School Use)

This interactive quiz allows students to answer true/false questions loaded from a local JSON file. It is ideal for middle and high school settings, especially for formative self-assessment and practice with factual content.

## How It Works

1. **Prepare a JSON file** containing your questions in this format:
   ```json
   {
     "questions": [
       { "text": "The Earth revolves around the Sun.", "answer": true },
       { "text": "Water boils at 80 degrees Celsius.", "answer": false }
     ]
   }
````

2. **In the interface**:

   * Use the **file selector** to upload your JSON file.
   * Enter how many questions you’d like to answer (e.g., 10 or 20).
   * Click **Load Quiz** to begin.

3. **During the quiz**:

   * For each question, choose between **True** or **False**.
   * Options are shuffled for each item.
   * You can change answers until you click submit.

4. **After finishing**:

   * Click **Submit Answers** to get your score.
   * Each item includes personalized feedback (correct/incorrect).
   * Use **Try Again** to load a new set of questions or retry the quiz.

## Features

* Clean, readable interface optimized for educational environments.
* Random question selection based on student input.
* JSON-based question system: fully offline, portable, and customizable.
* Feedback includes accuracy tracking and item-by-item evaluation.
* Designed for U.S. middle/high school grade levels (Grades 7–12), adaptable to subjects such as:

  * U.S. History
  * Civics/Government
  * Biology/Earth Science
  * World Geography
  * Introductory Philosophy or Ethics

## Technology Stack

* **HTML5** for semantic structure.
* **CSS3** for responsive layout and visual clarity.
* **Vanilla JavaScript** (no frameworks) for file handling, logic, and DOM manipulation.

## Author

Thomas Hills
[Email: thomasbooks71@gmail.com](mailto:thomasbooks71@gmail.com)

```
```

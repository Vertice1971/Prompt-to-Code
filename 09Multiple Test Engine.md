# Multiple Choice Quiz Engine in HTML + JavaScript

**Author:** Thomas Hills 
**Contact:** thomasbooks1971@gmail.com

This project allows you to run multiple-choice quizzes (with one correct answer per question) directly in the browser. It’s designed for educational use, ideal for high school students (Grades 9–12).

---

## 🧪 What does this engine do?

- Loads a `.json` file with multiple-choice questions.
- Lets you choose how many questions you want to answer.
- Randomly shuffles questions and options.
- Shows visual feedback after each answer.
- Displays your total correct answers at the end.
- Everything works locally in the browser.

---

## 📁 JSON File Structure

Your `.json` file should follow this structure:

```json
{
  "questions": [
    {
      "text": "What was one of the main causes of the French Revolution?",
      "options": {
        "a": "The discovery of America",
        "b": "The economic and social crisis of the Ancien Régime",
        "c": "The War of Spanish Succession"
      },
      "answer": "b"
    }
  ]
}
````

### 🔍 Key Details:

* `"text"`: the question text.
* `"options"`: an object with keys `"a"`, `"b"`, `"c"`… and their corresponding texts.
* `"answer"`: contains the **key** of the correct option, not the text itself.

You can include more than three options (e.g., `"d"`, `"e"`, etc.) if needed.

---

## 🧠 How to Generate Questions Using AI

You can generate your `.json` file using artificial intelligence. Just paste your class notes and ask:

> “Generate 30 multiple-choice questions with one correct answer in JSON format using this template…”

Then provide this template:

```json
{
  "questions": [
    {
      "text": "Question text here",
      "options": {
        "a": "Option A text",
        "b": "Option B text",
        "c": "Option C text"
      },
      "answer": "b"
    }
  ]
}
```

Make sure the structure stays intact to avoid loading errors.

---

## 🚀 How to Use the Quiz

1. Open the `index.html` file in your browser (double-click or drag it into a tab).
2. Click “Select a JSON file” and choose the file with your questions.
3. The system will display how many questions are available and let you choose how many to answer.
4. Click “Start Quiz” and begin!

---

## 💡 Tips

* Always save your `.json` files locally on your device.
* Use clear names like `genetics-grade9.json`, `civilwar-review.json`, etc.
* If something doesn't work, check that your `.json` file is correctly formatted.

---

## 🎨 Customization

You can adjust the visual design and quiz behavior in:

* The `<style>` section for colors, fonts, layout.
* The `<script>` section to adjust logic (attempt limits, feedback, scoring, etc.).

---

## 🛠️ Technical Requirements

* Any modern web browser (Chrome, Firefox, Edge, Brave…).
* No installation or internet connection required.
* Compatible with Windows, macOS, Linux, and tablets.

---

## 📚 Educational Uses

* Pre-assessment or final review.
* Interactive classroom games.
* Independent practice with auto-feedback.
* Group project where students create their own quizzes.

---

## 🛡️ License

Free for educational use. If you improve this project, share it with fellow educators.
Thomas Hills
```

````markdown
# Multiple Choice Quiz – Version 2

This is the second interactive multiple-choice quiz developed by Thomas Hills. It introduces a **proportional penalty system** for incorrect answers, ensuring a more accurate reflection of student understanding.

## What’s New in This Version?

In the original version, incorrect answers carried no penalty, which encouraged guessing and inflated scores.  
In this version, each wrong answer deducts a fraction of the question’s value, based on the number of incorrect options.  

- **Correct answers** add points toward a final grade out of 10.  
- **Incorrect answers** subtract a proportional amount, discouraging random guessing.  

The result is a fairer assessment that rewards genuine knowledge and penalizes unfounded guesses.

## How to Use

1. **Upload a JSON file** with questions in this format:
   ```json
   {
     "questions": [
       {
         "text": "What is the capital of France?",
         "options": {
           "a": "Paris",
           "b": "Rome",
           "c": "Madrid"
         },
         "answer": "a"
       }
     ]
   }
````

2. Choose how many questions you want to answer.
3. One question appears at a time with options **randomized**.
4. Click an option:

   * **Green** for correct (adds points).
   * **Red** for incorrect (shows correct answer and applies penalty).
5. Click **Next** to proceed.
6. At the end:

   * View total correct answers.
   * See final grade out of 10 (minimum 0).
7. Use **Restart** to retake with a new random selection.

## Features

* Proportional penalty for wrong answers
* Question-by-question progression
* Clear, animated design optimized for mobile
* Continuous scoring with decimal grades
* Full restart with new randomization

## Technologies

* HTML5
* CSS3 (modern styling, transitions, color feedback)
* JavaScript (DOM manipulation, scoring logic, file handling)

## Author

**Thomas Hills**
[Email: thomasbooks71@gmail.com](mailto:thomasbooks71@gmail.com)

```
```

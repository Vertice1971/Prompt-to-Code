# Statistics – High School Level (Grade 10–11)

**Author:** Thomas Hills  
**Contact:** thomasbooks1971@gmail.com

---

## Overview

This program is an interactive web application that simulates rolling a die with a customizable number of faces. It generates a series of random rolls and provides a full statistical analysis of the results.

It is designed as an educational tool to help students explore statistical concepts in a visual and hands-on way, suitable for use in high school math classrooms.

---

## Features

- **Dice roll simulation:** the user selects the number of faces and number of rolls.
- **Instant visualization of results.**
- **Frequency table** including:
  - Absolute frequency (fi)
  - Cumulative frequency (Fi)
  - Relative frequency (hi)
  - Cumulative relative frequency (Hi)
- **Optional calculation of:**
  - Mode (highlighted in the table)
  - Mean
  - Variance
  - Standard deviation
  - Coefficient of variation (CV)
- **Interactive display of the median**, with visual representation of frequency ranges by face.
- **Quartile display (Q1, Q2, Q3)** highlighted with different colors.
- **Custom percentile calculation**, with targeted highlighting.
- **Clean, self-contained interface** with no external dependencies – everything runs from a single `.html` file.

---

## How to Use

1. Open the file `dice_simulator.html` in any modern web browser.
2. Enter the number of die faces and number of rolls.
3. Click “Roll Dice.”
4. Review the results or access the frequency table and visual analysis screens.

---

## Technologies Used

- **HTML + CSS + vanilla JavaScript**
- Advanced PRNG: `xoshiro128**` with `splitmix32` for high-quality, reproducible randomness.

---

## Author

This program was created by **Thomas Hills**, philosophy teacher and educational content creator, as part of a collection of tools for teaching logic, statistics, and scientific reasoning through practical and interactive applications.

---

# Project Blueprint

## Overview

This project is a web application that provides a daily I Ching fortune telling service. Users can click a button to receive a random hexagram and its interpretation.

## Current State

*   **HTML (`index.html`):** A basic HTML structure with a "Hello, world!" message.
*   **CSS (`style.css`):** An empty stylesheet.
*   **JavaScript (`main.js`):** An empty JavaScript file.

## Plan

### Phase 1: Core Functionality (Current Request)

1.  **Update `index.html`:**
    *   Set the page title to "오늘의 주역 운세" (Today's I Ching Fortune).
    *   Add a main heading (`<h1>`) with the same title.
    *   Create a container to display the fortune result, including the hexagram symbol, name, and description.
    *   Add a button to trigger the fortune telling.
    *   Include a brief explanation of the I Ching.

2.  **Update `style.css`:**
    *   Apply a modern and visually appealing theme.
    *   Use a dark background with a subtle texture.
    *   Style the fortune result container, button, and text.
    *   Ensure the layout is responsive and mobile-friendly.

3.  **Update `main.js`:**
    *   Create a data structure (e.g., an array of objects) to store the 64 I Ching hexagrams, including their names, symbols, and interpretations.
    *   Implement a function to randomly select one of the 64 hexagrams.
    *   Write a function to update the DOM with the selected fortune.
    *   Add an event listener to the button to call the fortune-telling function when clicked.

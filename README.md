# 🎬 Movie Roulette

A minimalist, responsive web application that helps users solve decision fatigue by randomly selecting a movie from a curated list. Built entirely using vanilla frontend technologies (HTML5, CSS3, and JavaScript).

![Live Demo Preview](https://shields.io)

---

## ✨ Features

*   **Instant Randomizer:** Instantly selects a film from a predefined movie pool with a single click.
*   **Visual Feedback:** Features simulated loading states and dynamic color shifts based on app status.
*   **Fully Responsive:** Designed using modern CSS flexbox grids to look perfect on desktops, tablets, and smartphones.
*   **Zero Dependencies:** Crafted with raw HTML, CSS, and JS. No bulky frameworks or configurations required.

---

## 📁 Project Structure

```text
random-movie-chooser/
│
├── index.html    # Application structure and UI layout
├── style.css     # Modern, dark-themed styling rules
├── script.js     # Core randomization and animation logic
└── README.md     # Documentation and guide
```

---

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser (Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge) to run this project.

### Local Installation & Execution
1. **Clone or Download the Repository:**
   ```bash
   git clone https://github.com
   ```
2. **Navigate to the Project Folder:**
   ```bash
   cd random-movie-chooser
   ```
3. **Launch the App:**
   Simply double-click the `index.html` file to open it instantly in your default web browser.

---

## 🛠️ How to Customize the Movie List

You can easily replace the default movie selection with your personal watchlist:

1. Open the `script.js` file in any code editor.
2. Locate the `movies` array at the top of the file:
   ```javascript
   const movies = [
       "Inception",
       "The Dark Knight",
       // Add your favorite titles here...
   ];
   ```
3. Add, remove, or edit the movie titles inside the quotes (ensuring each item is separated by a comma).
4. Save the file and refresh your web browser.



This project is open-source and available under the [MIT License](LICENSE). Feel free to fork, modify, and use it for your own personal or educational creations!

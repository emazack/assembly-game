# Assembly: Endgame

A self-contained interactive word guessing game built using React. The goal: guess the word in under 8 attempts to stop Assembly from taking over all other programming languages.

This project was created independently, just with scaffolding grafic and idea from Scrimba community

---

## 🎮 Game Overview

You are given a hidden word. Each incorrect letter guessed eliminates one programming language from a list. If you eliminate all of them, Assembly wins. If you guess the word first, you save the programming world.

The game provides immediate visual feedback on correct and incorrect guesses, and offers a clean reset once the game ends.

---

## 🧱 Features

- **React Functional Component** architecture using `useState` for state management.
- **Live UI Feedback**:
  - Correct/incorrect letters are visually distinguished.
  - Languages fade out as they are "eliminated".
  - Confetti effect upon winning.
- **Conditional Rendering**:
  - Game over messages update based on win/loss state.
  - Farewell messages tied to specific eliminated languages.
- **No reliance on frameworks or component libraries** beyond minimal dependencies (`clsx`, `react-confetti`).

---

## 🧩 Code Highlights

- Organized by function:
  - State definition and derived state calculations
  - Utility functions for game logic (`getRandomWord`, `getFarewellText`)
  - Visual rendering broken into logically separated elements
- Focused on clarity and predictability; no over-abstraction or unnecessary complexity
- Minimal, expressive class naming with `clsx` to toggle styling states

---

## 📌 What I Learned

- Structuring state and derived state in React without cluttering the component
- Managing conditional rendering for dynamic UI updates
- Isolating reusable logic into utility functions
- Writing self-documenting code that doesn’t rely on external comments
- Creating a user experience that reacts immediately and gracefully to game progress

---

## ⚠️ Considerations

- No keyboard input support (click-only); can be added for accessibility
- Could be modularized further into smaller components if the project scales
- No test coverage yet; adding unit/integration tests would strengthen reliability

---

## 📁 How to Use

This project assumes a basic React development setup. If you know how to run a React project, you know how to run this. Drop the files into your environment and go.

npm install
npm run dev

---

## 🪪 License

MIT – free to use, change, or remix.

---

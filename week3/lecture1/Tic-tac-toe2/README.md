# Flask Tic Tac Toe

A simple tic-tac-toe game built with Flask and Python.

## Features

- Web-based tic-tac-toe game
- Real-time game state management
- Beautiful, responsive UI
- Session-based game management
- Reset and new game functionality

## Installation

1. Make sure you have Python installed on your system
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Game

1. Navigate to the project directory
2. Run the Flask application:
   ```bash
   python app.py
   ```
3. Open your web browser and go to `http://localhost:5000`
4. Click "New Game" to start playing!

## How to Play

1. Click "New Game" to start a new game
2. Players take turns clicking on empty cells
3. Player X goes first, followed by Player O
4. The first player to get three in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled without a winner, it's a tie
6. Use "Reset Game" to restart the current game

## Project Structure

```
tic-tac-toe2/
├── app.py              # Flask application and game logic
├── requirements.txt    # Python dependencies
├── README.md          # This file
├── templates/
│   └── index.html     # HTML template
└── static/
    ├── styles.css     # CSS styling
    └── script.js      # JavaScript frontend logic
```

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Modern CSS with gradients and animations
- **Session Management**: Flask sessions for game state

/* filepath: /Users/sohafarhana/Desktop/IITM/mad2/week3/lecture1/Tic-tac-toe1/tic-tac-toe/script.js */
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
];

// Add game status display
const container = document.querySelector('.container');
const statusDiv = document.createElement('div');
statusDiv.className = 'game-status';
statusDiv.textContent = `Player ${currentPlayer}'s turn`;
container.insertBefore(statusDiv, resetButton);

// Add click event listeners to cells
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Add reset button event listener
resetButton.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-index'));
    
    if (gameBoard[cellIndex] !== '' || !gameActive) {
        return;
    }
    
    // Update game board
    gameBoard[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add(currentPlayer.toLowerCase());
    
    if (checkWinner()) {
        gameActive = false;
        statusDiv.textContent = `Player ${currentPlayer} wins! 🎉`;
        highlightWinningCells();
        return;
    }
    
    if (checkDraw()) {
        gameActive = false;
        statusDiv.textContent = "It's a draw! 🤝";
        return;
    }
    
    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameBoard[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function highlightWinningCells() {
    winningCombinations.forEach(combination => {
        if (combination.every(index => gameBoard[index] === currentPlayer)) {
            combination.forEach(index => {
                cells[index].classList.add('winner');
            });
        }
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winner');
    });
}
class TicTacToeGame {
    constructor() {
        this.gameActive = false;
        this.board = Array(3).fill().map(() => Array(3).fill(''));
        this.currentPlayer = 'X';
        this.gameId = null;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        const newGameBtn = document.getElementById('new-game-btn');
        const resetBtn = document.getElementById('reset-btn');
        const cells = document.querySelectorAll('.cell');
        
        newGameBtn.addEventListener('click', () => this.startNewGame());
        resetBtn.addEventListener('click', () => this.resetGame());
        
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => this.handleCellClick(e));
        });
    }
    
    async startNewGame() {
        try {
            const response = await fetch('/new_game');
            const data = await response.json();
            
            if (data.status === 'success') {
                this.gameActive = true;
                this.gameId = data.game_id;
                this.clearBoard();
                this.updateGameStatus('Player X\'s turn');
                
                document.getElementById('new-game-btn').style.display = 'none';
                document.getElementById('reset-btn').style.display = 'inline-block';
                
                this.enableBoard();
            }
        } catch (error) {
            console.error('Error starting new game:', error);
        }
    }
    
    async handleCellClick(e) {
        if (!this.gameActive) return;
        
        const row = parseInt(e.target.dataset.row);
        const col = parseInt(e.target.dataset.col);
        
        if (e.target.textContent !== '') return;
        
        try {
            const response = await fetch('/make_move', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ row, col })
            });
            
            const data = await response.json();
            
            if (response.ok) {
                this.updateBoard(data.board);
                
                if (data.game_over) {
                    this.gameActive = false;
                    this.disableBoard();
                    
                    if (data.winner === 'Tie') {
                        this.updateGameStatus('It\'s a tie!', 'tie-announce');
                    } else {
                        this.updateGameStatus(`Player ${data.winner} wins!`, 'winner-announce');
                        this.highlightWinningCells();
                    }
                } else {
                    this.updateGameStatus(`Player ${data.current_player}'s turn`);
                }
            } else {
                console.error('Error making move:', data.error);
            }
        } catch (error) {
            console.error('Error making move:', error);
        }
    }
    
    async resetGame() {
        try {
            const response = await fetch('/reset_game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            const data = await response.json();
            
            if (data.status === 'success') {
                this.gameActive = true;
                this.clearBoard();
                this.updateGameStatus('Player X\'s turn');
                this.enableBoard();
            }
        } catch (error) {
            console.error('Error resetting game:', error);
        }
    }
    
    updateBoard(board) {
        const cells = document.querySelectorAll('.cell');
        
        cells.forEach((cell, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            const value = board[row][col];
            
            cell.textContent = value;
            cell.className = 'cell';
            
            if (value === 'X') {
                cell.classList.add('x');
            } else if (value === 'O') {
                cell.classList.add('o');
            }
        });
    }
    
    clearBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
        });
    }
    
    enableBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.remove('disabled');
        });
    }
    
    disableBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.classList.add('disabled');
        });
    }
    
    updateGameStatus(message, className = '') {
        const statusElement = document.getElementById('game-status');
        statusElement.textContent = message;
        statusElement.className = 'game-status';
        
        if (className) {
            statusElement.classList.add(className);
        }
    }
    
    highlightWinningCells() {
        // This is a simplified version - you could enhance it to actually detect and highlight winning combinations
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            if (cell.textContent !== '') {
                // Add a subtle highlight to all filled cells when game ends
                cell.style.backgroundColor = '#e8f5e8';
            }
        });
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToeGame();
});

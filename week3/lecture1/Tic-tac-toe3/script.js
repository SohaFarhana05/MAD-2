// Vue.js Application for Cute Tic-Tac-Toe Game
const { createApp } = Vue;

createApp({
    // Data properties - the reactive state of our application
    data() {
        return {
            // Game board represented as an array of 9 cells (3x3 grid)
            // Empty string means the cell is unoccupied
            board: ['', '', '', '', '', '', '', '', ''],
            
            // Current player - alternates between 'X' and 'O'
            currentPlayer: 'X',
            
            // Winner of the game ('X', 'O', 'tie', or null if game ongoing)
            winner: null,
            
            // Boolean to track if game is over
            gameOver: false,
            
            // Array to store indices of winning cells for highlighting
            winningCells: [],
            
            // Score tracking object
            scores: {
                X: 0,    // Player X wins
                O: 0,    // Player O wins
                tie: 0   // Tie games
            },
            
            // All possible winning combinations (indices of board array)
            winningCombinations: [
                [0, 1, 2], // Top row
                [3, 4, 5], // Middle row
                [6, 7, 8], // Bottom row
                [0, 3, 6], // Left column
                [1, 4, 7], // Middle column
                [2, 5, 8], // Right column
                [0, 4, 8], // Diagonal top-left to bottom-right
                [2, 4, 6]  // Diagonal top-right to bottom-left
            ]
        };
    },
    
    // Methods - functions that handle game logic and user interactions
    methods: {
        /**
         * Handle a player's move when they click on a cell
         * @param {number} index - The index of the clicked cell (0-8)
         */
        makeMove(index) {
            // Check if the move is valid:
            // 1. Cell must be empty
            // 2. Game must not be over
            if (this.board[index] !== '' || this.gameOver) {
                return; // Invalid move, do nothing
            }
            
            // Make the move by updating the board
            // Vue's reactivity will automatically update the UI
            this.board[index] = this.currentPlayer;
            
            // Check if this move resulted in a win
            if (this.checkWinner()) {
                this.winner = this.currentPlayer;
                this.gameOver = true;
                this.scores[this.currentPlayer]++; // Increment winner's score
                return;
            }
            
            // Check if the board is full (tie game)
            if (this.isBoardFull()) {
                this.winner = 'tie';
                this.gameOver = true;
                this.scores.tie++; // Increment tie count
                return;
            }
            
            // Switch to the other player
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        },
        
        /**
         * Check if the current player has won the game
         * @returns {boolean} - True if current player won, false otherwise
         */
        checkWinner() {
            // Iterate through all possible winning combinations
            for (let combination of this.winningCombinations) {
                const [a, b, c] = combination; // Destructure the three indices
                
                // Check if all three cells in this combination:
                // 1. Have the same value (same player)
                // 2. Are not empty
                if (this.board[a] && 
                    this.board[a] === this.board[b] && 
                    this.board[a] === this.board[c]) {
                    
                    // Store winning cells for visual highlighting
                    this.winningCells = combination;
                    return true;
                }
            }
            return false; // No winning combination found
        },
        
        /**
         * Check if all cells on the board are occupied
         * @returns {boolean} - True if board is full, false otherwise
         */
        isBoardFull() {
            // Use the every() method to check if all cells are non-empty
            return this.board.every(cell => cell !== '');
        },
        
        /**
         * Reset the game to its initial state
         * This allows players to start a new game
         */
        resetGame() {
            // Reset all game state properties to their initial values
            this.board = ['', '', '', '', '', '', '', '', ''];
            this.currentPlayer = 'X';
            this.winner = null;
            this.gameOver = false;
            this.winningCells = [];
            
            // Note: We don't reset scores as they persist across games
        }
    },
    
    // Lifecycle hook - runs when the Vue component is mounted to the DOM
    mounted() {
        console.log('🎮 Cute Tic-Tac-Toe game loaded successfully!');
        console.log('Built with Vue.js - Have fun playing!');
    }
}).mount('#app'); // Mount the Vue app to the element with id="app"

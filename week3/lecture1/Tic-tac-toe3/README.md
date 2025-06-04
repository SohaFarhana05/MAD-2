# 🎮 Cute Tic-Tac-Toe Game

A beautiful, minimal tic-tac-toe game built with Vue.js featuring cute emojis, smooth animations, and a modern design.

## 🌟 Features

- **Beautiful UI**: Modern gradient background with rounded corners and smooth animations
- **Cute Design**: Uses emojis (❌ and ⭕) instead of plain X and O
- **Score Tracking**: Keeps track of wins for both players and ties
- **Responsive**: Works on both desktop and mobile devices
- **Smooth Animations**: Includes bounce, pop-in, and celebration animations
- **Win Highlighting**: Winning cells are highlighted with a special animation

## 🚀 How to Play

1. Open `index.html` in your web browser
2. Player X (❌) starts first
3. Click on any empty cell to make your move
4. The game alternates between X and O players
5. First player to get 3 in a row (horizontally, vertically, or diagonally) wins!
6. Click "🔄 New Game" to start over

## 📁 Project Structure

```
Tic-tac-toe3/
├── index.html      # Main HTML file with Vue.js template
├── styles.css      # CSS styles with animations and responsive design
├── script.js       # Vue.js application logic
└── README.md       # This documentation file
```

## 🔧 Technical Details

### Vue.js Implementation

This project uses **Vue.js 3** via CDN for simplicity. The application is structured as a single Vue component with:

#### Data Properties
- `board`: Array of 9 elements representing the 3x3 game grid
- `currentPlayer`: String tracking whose turn it is ('X' or 'O')
- `winner`: Stores the winner ('X', 'O', 'tie', or null)
- `gameOver`: Boolean flag indicating if the game has ended
- `winningCells`: Array storing indices of winning cells for highlighting
- `scores`: Object tracking wins for each player and ties
- `winningCombinations`: Array of all possible winning patterns

#### Methods
- `makeMove(index)`: Handles player moves and game logic
- `checkWinner()`: Checks if current player has won
- `isBoardFull()`: Checks if the game is a tie
- `resetGame()`: Resets the game state for a new game

### HTML Structure

The HTML uses Vue.js directives for dynamic behavior:
- `v-for`: Renders the game board cells
- `v-if`: Conditionally shows game status messages
- `@click`: Handles click events on cells and buttons
- `:class`: Dynamically applies CSS classes based on game state

### CSS Features

The styling includes:
- **Flexbox & Grid**: For responsive layout
- **CSS Animations**: Bounce, pop-in, wiggle, and pulse effects
- **Gradient Backgrounds**: Modern visual appeal
- **Box Shadows**: Depth and visual hierarchy
- **Responsive Design**: Mobile-friendly breakpoints

## 🎨 Design Choices

### Color Scheme
- **Primary**: Purple gradient background (#667eea to #764ba2)
- **Secondary**: White game container with subtle shadows
- **Accent**: Green for wins, yellow for ties
- **Text**: Dark gray (#333) for readability

### Typography
- **Font**: Segoe UI system font for consistency
- **Sizes**: Responsive typography that scales with screen size
- **Weights**: Bold for important elements, normal for body text

### Animations
- **Bounce**: Current player indicator
- **Pop-in**: New moves appearing on the board
- **Celebration**: Winner announcement
- **Pulse**: Winning cells highlighting
- **Wiggle**: Celebration emojis

## 🛠️ Customization

### Changing Emojis
Edit the HTML template to use different emojis:
```html
<span v-if="cell === 'X'" class="cell-x">🐱</span>
<span v-if="cell === 'O'" class="cell-o">🐶</span>
```

### Modifying Colors
Update the CSS custom properties or gradient values:
```css
background: linear-gradient(135deg, #your-color-1, #your-color-2);
```

### Adding Sound Effects
You can enhance the game by adding sound effects in the JavaScript:
```javascript
makeMove(index) {
    // Add sound effect
    new Audio('move-sound.mp3').play();
    // ... rest of the method
}
```

## 🌍 Browser Compatibility

This game works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- Vue.js 3

**Tested on:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Support

The game is fully responsive and includes:
- Touch-friendly button sizes
- Optimized layout for small screens
- Proper viewport meta tag
- Scalable font sizes

## 🚀 Getting Started

1. **Clone or download** the files to your computer
2. **Open** `index.html` in any modern web browser
3. **Start playing** immediately - no setup required!

## 🔮 Future Enhancements

Potential improvements you could add:
- [ ] AI opponent with different difficulty levels
- [ ] Multiplayer support over network
- [ ] Game history and replay functionality
- [ ] Custom themes and color schemes
- [ ] Sound effects and background music
- [ ] Tournament mode with multiple rounds
- [ ] Player name input and profiles

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Made with ❤️ using Vue.js**

Enjoy playing this cute tic-tac-toe game!

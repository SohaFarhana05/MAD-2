# MAD-2


## Week-02
### Lecture 1 - Basic JavaScript Calcuator
In this lecture, we have learned and implemented the working of a basic calculator with minimal JS functions such as eval() and math.evaluate().
We have also learned basic HTML and CSS which are useful for JS.
We have learned about event listeners, functions, etc. in JS

### Lecture 2 - GUI Calculator
In this lecture, we have learned and implemented the working of a gui calculator which basically means we will have buttons for numbers to type and calculate any arithmetic expression unlike the first lecture where we had space to type our expression. Implemented with HTML,CSS and JS.


## Week-03
### Lecture 1 - 🎮 Tic-Tac-Toe Collection

A comprehensive collection of three different tic-tac-toe game implementations, showcasing different web development approaches and technologies. This repository demonstrates the evolution from simple client-side JavaScript to server-side Flask applications to modern Vue.js frameworks.

## 📂 Project Overview

This workspace contains three distinct implementations of the classic tic-tac-toe game:

| Version | Technology Stack | Complexity | Best For |
|---------|-----------------|------------|----------|
| **Tic-tac-toe1** | HTML + CSS + Vanilla JS | Beginner | Learning basics |
| **Tic-tac-toe2** | Flask + Python + Jinja2 | Intermediate | Server-side logic |
| **Tic-tac-toe3** | Vue.js + Modern CSS | Advanced | Modern frameworks |

---

## 🎯 Tic-tac-toe1: Vanilla JavaScript Version

### 📋 Overview
A pure client-side implementation using vanilla HTML, CSS, and JavaScript. Perfect for beginners learning web development fundamentals.

### 🛠️ Technologies
- **HTML5**: Semantic structure
- **CSS3**: Styling and basic animations
- **Vanilla JavaScript**: Game logic and DOM manipulation

### ✨ Features
- Simple, clean interface
- Basic game logic implementation
- Local state management
- Immediate gameplay without server

### 🚀 Quick Start
```bash
# Navigate to the directory
cd Tic-tac-toe1/

# Open in browser
open index.html
# OR on Linux: xdg-open index.html
# OR on Windows: start index.html
```

### 📚 Learning Objectives
- DOM manipulation
- Event handling
- Basic game logic
- CSS styling fundamentals

---

## 🌐 Tic-tac-toe2: Flask Web Application

### 📋 Overview
A server-side implementation using Python Flask framework. Demonstrates session management, RESTful APIs, and server-client architecture.

### 🛠️ Technologies
- **Python 3.x**: Backend logic
- **Flask**: Web framework
- **HTML/CSS/JavaScript**: Frontend
- **Session Management**: Game state persistence
- **RESTful APIs**: Client-server communication

### ✨ Features
- Session-based game management
- Multiple concurrent games support
- RESTful API endpoints
- Server-side game validation
- Persistent game state
- Professional web application structure

### 🚀 Quick Start
```bash
# Navigate to the directory
cd Tic-tac-toe2/

# Install dependencies
pip install -r requirements.txt

# Run the Flask application
python app.py

# Open browser and navigate to
# http://localhost:5000
```

### 📚 Learning Objectives
- Flask web framework
- Session management
- RESTful API design
- Server-client architecture
- Python web development

### 🔧 API Endpoints
- `GET /` - Main game page
- `GET /new_game` - Create new game session
- `POST /make_move` - Make a game move
- `GET /game_state` - Get current game state
- `POST /reset_game` - Reset current game

---

## ⚡ Tic-tac-toe3: Vue.js Modern Implementation

### 📋 Overview
A modern, reactive implementation using Vue.js 3 with beautiful animations and responsive design. Showcases contemporary frontend development practices.

### 🛠️ Technologies
- **Vue.js 3**: Reactive JavaScript framework
- **Modern CSS**: Grid, Flexbox, animations
- **ES6+**: Modern JavaScript features
- **Responsive Design**: Mobile-first approach
- **CSS Animations**: Smooth, delightful interactions

### ✨ Features
- 🎨 Beautiful, modern UI with gradients and shadows
- 😊 Cute emoji-based gameplay (❌ and ⭕)
- 📱 Fully responsive design
- 🎭 Smooth animations and transitions
- 📊 Score tracking across multiple games
- 🏆 Win highlighting with special effects
- 🔄 Easy game reset functionality
- 💫 Advanced CSS animations (bounce, pop-in, pulse)

### 🚀 Quick Start
```bash
# Navigate to the directory
cd Tic-tac-toe3/

# Open in browser (no build process needed!)
open index.html
# OR on Linux: xdg-open index.html
# OR on Windows: start index.html
```

### 📚 Learning Objectives
- Vue.js 3 fundamentals
- Reactive data binding
- Component-based architecture
- Modern CSS techniques
- Animation and transitions
- Responsive web design

### 🎨 Design Features
- **Color Scheme**: Purple gradient backgrounds
- **Typography**: System fonts with multiple weights
- **Animations**: Bounce, pop-in, celebration, wiggle, pulse
- **Layout**: CSS Grid for game board, Flexbox for controls
- **Responsive**: Mobile-optimized breakpoints

---

## 🔄 Technology Progression

This collection demonstrates a natural progression in web development:

### 1️⃣ **Vanilla JavaScript** (Tic-tac-toe1)
- **Pros**: Simple, no dependencies, educational
- **Cons**: Manual DOM manipulation, no reactivity
- **Use Case**: Learning fundamentals, simple projects

### 2️⃣ **Flask Backend** (Tic-tac-toe2)
- **Pros**: Server-side logic, session management, scalable
- **Cons**: Server dependency, more complex setup
- **Use Case**: Web applications, multi-user games, data persistence

### 3️⃣ **Vue.js Frontend** (Tic-tac-toe3)
- **Pros**: Reactive, component-based, modern UX
- **Cons**: Framework learning curve, build complexity (simplified here)
- **Use Case**: Modern web apps, interactive UIs, single-page applications

---



---


## 🎓 Educational Value

Each implementation teaches different aspects of web development:

### **Frontend Skills**
- HTML semantic structure
- CSS styling and animations
- JavaScript programming
- Responsive design
- Modern frameworks (Vue.js)

### **Backend Skills**
- Python programming
- Flask web framework
- RESTful API design
- Session management
- Server-client architecture

### **General Skills**
- Problem-solving
- Code organization
- Version control
- Documentation
- Testing and debugging

---


## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for:
- Bug fixes
- Feature enhancements
- Documentation improvements
- Code optimizations

---

## 📞 Support

If you have questions about any of the implementations:
1. Check the individual README files in each project directory
2. Review the code comments for detailed explanations
3. Open an issue for specific questions

---

**Made with ❤️ for learning web development**

*Each implementation represents a different approach to solving the same problem, demonstrating the evolution and diversity of web development technologies.*

from flask import Flask, render_template, request, jsonify, session # type: ignore
import uuid

app = Flask(__name__)
app.secret_key = 'your-secret-key-change-in-production'

# Game state storage
games = {}

class TicTacToe:
    def __init__(self):
        self.board = [['', '', ''], ['', '', ''], ['', '', '']]
        self.current_player = 'X'
        self.winner = None
        self.game_over = False
        
    def make_move(self, row, col):
        if self.board[row][col] == '' and not self.game_over:
            self.board[row][col] = self.current_player
            if self.check_winner():
                self.winner = self.current_player
                self.game_over = True
            elif self.is_board_full():
                self.game_over = True
                self.winner = 'Tie'
            else:
                self.current_player = 'O' if self.current_player == 'X' else 'X'
            return True
        return False
    
    def check_winner(self):
        # Check rows
        for row in self.board:
            if row[0] == row[1] == row[2] != '':
                return True
        
        # Check columns
        for col in range(3):
            if self.board[0][col] == self.board[1][col] == self.board[2][col] != '':
                return True
        
        # Check diagonals
        if self.board[0][0] == self.board[1][1] == self.board[2][2] != '':
            return True
        if self.board[0][2] == self.board[1][1] == self.board[2][0] != '':
            return True
        
        return False
    
    def is_board_full(self):
        for row in self.board:
            for cell in row:
                if cell == '':
                    return False
        return True
    
    def reset(self):
        self.__init__()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/new_game')
def new_game():
    game_id = str(uuid.uuid4())
    games[game_id] = TicTacToe()
    session['game_id'] = game_id
    return jsonify({'game_id': game_id, 'status': 'success'})

@app.route('/make_move', methods=['POST'])
def make_move():
    game_id = session.get('game_id')
    if not game_id or game_id not in games:
        return jsonify({'error': 'No active game'}), 400
    
    data = request.json
    row = data.get('row')
    col = data.get('col')
    
    if row is None or col is None:
        return jsonify({'error': 'Invalid move'}), 400
    
    game = games[game_id]
    success = game.make_move(row, col)
    
    if success:
        return jsonify({
            'board': game.board,
            'current_player': game.current_player,
            'winner': game.winner,
            'game_over': game.game_over
        })
    else:
        return jsonify({'error': 'Invalid move'}), 400

@app.route('/game_state')
def game_state():
    game_id = session.get('game_id')
    if not game_id or game_id not in games:
        return jsonify({'error': 'No active game'}), 400
    
    game = games[game_id]
    return jsonify({
        'board': game.board,
        'current_player': game.current_player,
        'winner': game.winner,
        'game_over': game.game_over
    })

@app.route('/reset_game', methods=['POST'])
def reset_game():
    game_id = session.get('game_id')
    if not game_id or game_id not in games:
        return jsonify({'error': 'No active game'}), 400
    
    games[game_id].reset()
    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(debug=True)

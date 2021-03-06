import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Navbar extends React.Component {
  render (){
    return (
      <div className="navbar">
        <a href="https://github.com/kvo189/tic-tac-toe">View On Github</a>
      </div>
    );
  }
}

function Square(props) {
  return (
    <button className={"square" + (props.highlighted ? ' highlighted' : '')} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    const isWinningSquare = (this.props.winningSquares && this.props.winningSquares.includes(i)) ? true : false;
    return <Square
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
      highlighted={isWinningSquare}
      />;
  }

  generateBoard() {
    var board = [];
    for (let row = 0; row < 3; row++) {
      var cols = [];
      for (let col = 0; col < 3; col++) {
        cols.push(this.renderSquare(row*3+col));
      }
      board.push(<div key={row} className="board-row">{cols}</div>);
    }
    return board;
  }

  render() {
    return (
      <div>
        {this.generateBoard()}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [{
        squares: Array(9).fill(null),
        moveLocation: {col: null, row: null}
      }],
      xIsNext: true,
      stepNumber: 0,
      historyAscending: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const moveLocation = {
      col: i % 3 + 1,
      row: Math.floor(i / 3) + 1,
    }
    if (calculateWinner(squares).player || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squares, moveLocation: moveLocation}]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  handleHistorySort() {
    this.setState({
      historyAscending: !this.state.historyAscending,
    });
  }

  render() {
    var history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares).player;
    
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ` (col:${step.moveLocation.col}, row:${step.moveLocation.row})`:
        'Go to game start';
      const isCurrent = (this.state.stepNumber === move) ? 
        {fontWeight: 'bold'} : 
        {fontWeight: 'normal'};
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} style={isCurrent}>
            {desc}
          </button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }else if(history.length > 9){
      status = 'It is a draw!'
    }else{
      status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
    }
    return (
      <div>
        <Navbar/>
        <div className="game">
          <div className="game-board">
            <Board 
              winningSquares={calculateWinner(current.squares).winningSquares}
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <br></br>
            <button onClick={() => this.handleHistorySort()}>
              Toggle Move History Order ({this.state.historyAscending ? 'Ascending' : 'Descending'})
            </button>
            <ol>{this.state.historyAscending ? moves : moves.reverse()}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {player: squares[a], winningSquares: lines[i]};
    }
  }
  return {player: null, winningSquares: null};
}

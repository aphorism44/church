//this was from the tutorial; stored for reference

//renders a single button
//setState will updte the state of all this class's descendants
//PASS THE STATE UP if you need them all to see it; also allows children to
//communicate with each other
/*
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()  }>
        {this.props.value}
      </button>
    );
  }
}
*/
//functional components - use when class only has a render function (I don't
//like this idea; makes it less flexible...)
function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </ button>
  );
}

//renders 9 squares (i=9)
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} />
      );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//renders board w/placeholders
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null)}], xIsNext: true, stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice(); //slice used here to copy array
    //break if game ends
    if (calculateWinner(squares) || squares[i])
      return;

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({history: history.concat([{squares: squares}]), xIsNext: !this.state.xIsNext, stepNumber: history.length })
  }

  //NOTE - x always goes first, so you can use this logic
  jumpTo(step) {
    this.setState({ stepNumber: step, xIsNext: (step % 2) === 0 });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    //the moves each have as key the move-number it happened it
    const moves = history.map((step, move) => {
        const desc = move ? "Go to move # " + move : "Go to game start";
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
    });

    let status;
    if (winner)
      status = "Winner: " + winner;
    else
      status = "Next Player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares}  onClick={(i) => this.handleClick(i) } />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

//helper function
function calculateWinner(squares) {
  //these are all the possible lines in a a table
  const lines = [ [0,1,2]
                  ,[3,4,5]
                  ,[6,7,8]
                  ,[0,3,6]
                  ,[1,4,7]
                  ,[2,5,8]
                  ,[0,4,8]
                  ,[2,4,6] ];
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
}


// ========================================
/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/

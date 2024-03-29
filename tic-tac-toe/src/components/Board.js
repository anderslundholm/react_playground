import React from 'react';

class Board extends React.Component {
  renderSquare(i) {
    return(
      <Square
        isWinning={this.props.winningSquares.includes(i)}
        key={"square" + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  renderSquares(n) {
    let squares = []
    for (let i = n; i < n + 3; i++) {
      squares.push(this.renderSquare(i))
    }
    return squares
  }

  renderRows(i) {
    return <div className="board-row">{this.renderSquares(i)}</div>
  }

  render() {
    return (
      <div>
        {this.renderRows(0)}
        {this.renderRows(3)}
        {this.renderRows(6)}
      </div>
    );
  }
}

function Square(props) {
  return (
    <button 
      className={"square" + (props.isWinning ? " square-winning" : "")}
      onClick={props.onClick}
    >
      {props.value}
    </button>
    
  )
}

export default Board
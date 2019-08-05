import React from 'react';

import Board from './Board';
import { calculateWinner } from '../utils/helpers';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.playerMadeTurn = this.props.playerMadeTurn.bind(this);
    this.playerJumpsTo = this.props.playerJumpsTo.bind(this);
  }

  handleClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.whoseTurn();
    const xIsNext = !this.props.xIsNext;
    const stepNumber = history.length;

    this.playerMadeTurn(
      history.concat([{ squares }]), 
      stepNumber, 
      xIsNext
    );
  }

  whoseTurn() {
    return this.props.xIsNext ? "X" : "O";
  }

  render() {
    const { history } = this.props;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.whoseTurn());
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.playerJumpsTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }
}

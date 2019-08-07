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

    const winner = calculateWinner(squares);

    if (winner.winner || squares[i]) {
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

  renderStatus(squares) {
    const winner = calculateWinner(squares);

    if (winner.winner) {
      return `Winner: ${winner.winner}`;
    }

    if (squares.filter(sq => sq === null).length < 1) {
      return 'Draw';
    }

    return `Next player: ${this.whoseTurn()}`;
  }

  render() {
    const { history } = this.props;
    const current = history[this.props.stepNumber];
    const status = this.renderStatus(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Play again';
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

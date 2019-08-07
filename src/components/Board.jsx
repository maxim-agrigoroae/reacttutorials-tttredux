import React from 'react';

import Square from './Square';

import { calculateWinner } from '../utils/helpers';

export default class Board extends React.Component {
  renderSquare(i, applyWinner) {
    return (
      <Square
        key={i}
        applyWinner={applyWinner}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const { lines } = calculateWinner(this.props.squares);
    const board = [];

    let square = 0;
    for (let i = 0; i < 3; i++) {
      let row = [];

      for (let j = 0; j < 3; j++) {
        const applyWinner = lines.includes(square);
        row.push(this.renderSquare(square, applyWinner));
        square += 1;
      }

      board.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
      <div>{board}</div>
    );
  }
}

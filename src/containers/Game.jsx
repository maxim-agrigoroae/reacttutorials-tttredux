import React from 'react';
import { connect } from 'react-redux';

import GameComponent from '../components/Game';
import { playerMadeTurn, playerJumpsTo } from '../actions/game';

class Game extends React.Component {
  render() {
    return <GameComponent 
      history={this.props.history}
      stepNumber={this.props.stepNumber}
      xIsNext={this.props.xIsNext}
      playerMadeTurn={this.props.playerMadeTurn}
      playerJumpsTo={this.props.playerJumpsTo}
    />;
  }
}

const mapStateProps = (state) => {
  return {
    history: state.game.history,
    stepNumber: state.game.stepNumber,
    xIsNext: state.game.xIsNext,
    playerMadeTurn: state.game.playerMadeTurn,
    playerJumpsTo: state.game.playerJumpsTo,
  };
}

const mapDispatchProps = {
  playerMadeTurn,
  playerJumpsTo,
}

export default connect(mapStateProps, mapDispatchProps)(Game);

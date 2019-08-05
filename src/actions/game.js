export const GAME_PLAYER_MADE_TURN = 'GAME_PLAYER_MADE_TURN';
export const GAME_PLAYER_JUMP_TO = 'GAME_PLAYER_JUMP_TO';

export const playerMadeTurn = (history, stepNumber, xIsNext) => {
  return {
    type: GAME_PLAYER_MADE_TURN,
    payload: {
      history,
      stepNumber,
      xIsNext,
    }
  };
}

export const playerJumpsTo = (turn) => {
  return {
    type: GAME_PLAYER_JUMP_TO,
    payload: {
      stepNumber: turn,
      xIsNext: (turn % 2) === 0
    }
  }
};

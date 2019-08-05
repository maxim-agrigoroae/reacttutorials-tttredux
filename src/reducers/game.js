import { GAME_PLAYER_MADE_TURN, GAME_PLAYER_JUMP_TO } from '../actions/game';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    }
  ],
  stepNumber: 0,
  xIsNext: true
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_PLAYER_MADE_TURN:
      return {
        ...state,
        history: action.payload.history,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext,
      };

    case GAME_PLAYER_JUMP_TO:
      return {
        ...state,
        stepNumber: action.payload.stepNumber,
        xIsNext: action.payload.xIsNext,
      };

    default:
      return state;
  }
};

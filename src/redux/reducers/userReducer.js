import * as actionTypes from '../constants';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export default function news(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.USER_REQUESTED:
    case actionTypes.AUTHOR_NEWS_REQUESTED:
      return {
        ...state, isLoading: true, user: null, error: null,
      };
    case actionTypes.USER_RECEIVED:
      return {
        ...state, isLoading: false, user: action.payload, error: null,
      };
    case actionTypes.USER_FAILED:
      return {
        ...state, isLoading: false, error: action.error,
      };
    default: return state;
  }
}

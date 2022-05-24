import * as actionTypes from '../constants';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

export default function news(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.USER_NEWS_REQUESTED:
    case actionTypes.AUTHOR_NEWS_REQUESTED:
      return {
        ...state, isLoading: true, user: {}, error: null,
      };
    case actionTypes.USER_NEWS_RECEIVED:
      return {
        ...state, isLoading: false, user: action.payload, error: null,
      };
    case actionTypes.USER_NEWS_FAILED:
      return {
        ...state, isLoading: false, user: {}, error: action.error,
      };
    default: return state;
  }
}

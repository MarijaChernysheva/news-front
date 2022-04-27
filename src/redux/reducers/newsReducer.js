import * as actionTypes from '../constants';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
};

export default function news(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return {
        ...state, isLoading: true, news: [], error: null,
      };
    case actionTypes.NEWS_RECEIVED:
      return {
        ...state, isLoading: false, news: action.payload, error: null,
      };
    case actionTypes.NEWS_FAILED:
      return {
        ...state, isLoading: false, news: [], error: action.error,
      };
    default: return state;
  }
}

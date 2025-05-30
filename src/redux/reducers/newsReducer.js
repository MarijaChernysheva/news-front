import * as actionTypes from '../constants';

const initialState = {
  news: [],
  isLoading: false,
  error: null,
  isNewsModalOpen: false,
};

export default function news(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.NEWS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        news: [],
        error: null,
      };

    case actionTypes.NEWS_RECEIVED:
      return {
        ...state,
        isLoading: false,
        news: action.payload,
        error: null,
      };
    case actionTypes.NEWS_FAILED:
      return {
        ...state,
        isLoading: false,
        news: [],
        error: action.error,
      };
    case actionTypes.TOGGLE_NEWS_MODAL:
      return {
        ...state,
        isNewsModalOpen: action.payload,
      };
    case actionTypes.USER_NEWS_REQUESTED:
      return {
        ...state,
        news: action.payload,
        isLoading: true,
        isNewsModalOpen: false,
        error: null,
      };

    default: return state;
  }
}

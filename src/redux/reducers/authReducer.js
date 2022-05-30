import * as actionTypes from '../constants';

const initialState = {
  isModalOpen: false,
  modalType: '',
  error: null,
  isLoggedIn: Boolean(localStorage.getItem('token')),
  // user: {},
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case actionTypes.CHANGE_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_RECEIVED:
      return {
        ...state,
        isModalOpen: false,
        error: null,
        isLoggedIn: true,
        // user: action.payload.user,
      };
    case actionTypes.AUTH_RECEIVED:
      return {
        ...state,
        isModalOpen: false,
        error: null,
        isLoggedIn: true,
      };
    case actionTypes.AUTH_FAILED:
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default: return state;
  }
}

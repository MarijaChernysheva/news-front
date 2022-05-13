import * as actionTypes from '../constants';

const initialState = {
  modalIsOpen: false,
  modalType: '',
  error: null,
  userIsLogin: Boolean(localStorage.getItem('token')),
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    case actionTypes.CHANGE_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
      };
    case actionTypes.AUTH_RECEIVED:
    case actionTypes.LOGIN_RECEIVED:
      return {
        ...state,
        modalIsOpen: false,
        error: null,
        userIsLogin: true,
      };
    case actionTypes.AUTH_FAILED:
    case actionTypes.LOGIN_FAILED:
      return {
        ...state, error: action.error,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userIsLogin: false,
      };
    default: return state;
  }
}

import * as actionTypes from '../constants';

const initialState = {
  isModalOpen: false,
  modalType: '',
  error: null,
  isUserLogin: Boolean(localStorage.getItem('token')),
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
    case actionTypes.AUTH_RECEIVED:
    case actionTypes.LOGIN_RECEIVED:
      return {
        ...state,
        isModalOpen: false,
        error: null,
        isUserLogin: true,
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
        isUserLogin: false,
      };
    default: return state;
  }
}

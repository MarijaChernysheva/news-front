import authReducer from './authReducer';

describe('authReducer', () => {
  const initialState = {
    isModalOpen: false,
    modalType: '',
    error: null,
    isLoggedIn: Boolean(localStorage.getItem('token')),
  };
  test('should return the initial state', () => {
    expect(authReducer(initialState, {})).toEqual({
      isModalOpen: false,
      modalType: '',
      error: null,
      isLoggedIn: false,
    });
  });

  test('should handle TOGGLE_MODAL', () => {
    expect(
      authReducer(initialState, {
        type: 'TOGGLE_MODAL',
        payload: true,
      }),
    ).toEqual({
      isModalOpen: true,
      modalType: '',
      error: null,
      isLoggedIn: false,
    });
  });
  test('should handle CHANGE_MODAL_TYPE', () => {
    expect(
      authReducer(initialState, {
        type: 'CHANGE_MODAL_TYPE',
        payload: 'login',
      }),
    ).toEqual({
      isModalOpen: false,
      modalType: 'login',
      error: null,
      isLoggedIn: false,
    });
  });
  test('should handle LOGIN_RECEIVED', () => {
    expect(authReducer(initialState, {
      type: 'LOGIN_RECEIVED',
    })).toEqual({
      isModalOpen: false,
      error: null,
      isLoggedIn: true,
      modalType: '',
    });
  });
  test('should handle AUTH_RECEIVED', () => {
    expect(authReducer(initialState, {
      type: 'AUTH_RECEIVED',
    })).toEqual({
      isModalOpen: false,
      error: null,
      isLoggedIn: true,
      modalType: '',
    });
  });
  test('should handle AUTH_FAILED', () => {
    expect(authReducer(initialState, {
      type: 'AUTH_FAILED',
      error: 'error',
    })).toEqual({
      isModalOpen: false,
      error: 'error',
      isLoggedIn: false,
      modalType: '',
    });
  });
  test('should handle LOGOUT', () => {
    expect(authReducer(initialState, {
      type: 'LOGOUT',
    })).toEqual({
      isModalOpen: false,
      error: null,
      isLoggedIn: false,
      modalType: '',
    });
  });
});

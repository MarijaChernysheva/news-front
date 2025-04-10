import authReducer from './authReducer';

const INITIAL_VALUE = {
  isModalOpen: false,
  modalType: '',
  error: null,
  isLoggedIn: false,
};

describe('authReducer', () => {
  const initialState = {
    ...INITIAL_VALUE,
    isLoggedIn: Boolean(localStorage.getItem('token')),
  };
  test('should return the initial state', () => {
    expect(authReducer(initialState, {})).toEqual({
      ...INITIAL_VALUE,
    });
  });

  test('should open a modal window', () => {
    expect(
      authReducer(initialState, {
        type: 'TOGGLE_MODAL',
        payload: true,
      }),
    ).toEqual({
      ...INITIAL_VALUE,
      isModalOpen: true,
    });
  });
  test('should open the login form', () => {
    expect(
      authReducer(initialState, {
        type: 'CHANGE_MODAL_TYPE',
        payload: 'login',
      }),
    ).toEqual({
      ...INITIAL_VALUE,
      modalType: 'login',
    });
  });
  test('should mark user as logged in', () => {
    expect(authReducer(initialState, {
      type: 'LOGIN_RECEIVED',
    })).toEqual({
      ...INITIAL_VALUE,
      isLoggedIn: true,
    });
  });
  test('should mark user as registered', () => {
    expect(authReducer(initialState, {
      type: 'AUTH_RECEIVED',
    })).toEqual({
      ...INITIAL_VALUE,
      isLoggedIn: true,

    });
  });
  test('should mark authentication as failed', () => {
    expect(authReducer(initialState, {
      type: 'AUTH_FAILED',
      error: 'error',
    })).toEqual({
      ...INITIAL_VALUE,
      error: 'error',
    });
  });
  test('should mark user as logged out', () => {
    expect(authReducer(initialState, {
      type: 'LOGOUT',
    })).toEqual({
      ...INITIAL_VALUE,
    });
  });
});

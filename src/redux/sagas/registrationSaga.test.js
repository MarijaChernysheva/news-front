import { call, put } from 'redux-saga/effects';

import api from '../../api/api';
import { gotAuth, rejectedAuth } from '../actions';
import { registrationSaga } from './registrationSaga';

const TEST_EMAIL = 'test@mail.ru';
const TEST_PASSWORD = 'test_password';
const TEST_LOGIN = 'test_login';

describe('registrationSaga', () => {
  const payload = {
    email: TEST_EMAIL,
    password: TEST_PASSWORD,
    login: TEST_LOGIN,
  };
  const action = { payload };
  test('should store token on successful registration', () => {
    const generator = registrationSaga(action);
    expect(generator.next().value).toEqual(call(api.post, '/auth/signup', payload));

    const mockResponse = {
      data: {
        currentUser: {
          email: TEST_EMAIL,
          password: TEST_PASSWORD,
          login: TEST_LOGIN,
        },
        token: 'token',
      },
    };
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    expect(generator.next(mockResponse).value).toEqual(put(gotAuth(mockResponse.data)));
    expect(setItemMock).toHaveBeenCalledWith('token', 'token');
    expect(generator.next().done).toBe(true);
  });

  test('should handle registration failure', () => {
    const generator = registrationSaga(action);
    expect(generator.next().value).toEqual(call(api.post, '/auth/signup', payload));

    const mockError = { response: { data: { message: 'error' } } };

    expect(generator.throw(mockError).value)
      .toEqual(put(rejectedAuth(mockError.response.data.message)));
    expect(generator.next().done).toBe(true);
  });
});

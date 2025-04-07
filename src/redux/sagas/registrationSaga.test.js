import { call, put } from 'redux-saga/effects';
import { registrationSaga } from './registrationSaga';
import api from '../../api/api';
import { gotAuth, rejectedAuth } from '../actions';

describe('registrationSaga', () => {
  const payload = {
    email: '444@mail.ru',
    password: '444',
    login: '444',
  };
  const action = { payload };
  test('should handle successful registration by storing the token and dispatching gotAuth', () => {
    const generator = registrationSaga(action);
    expect(generator.next().value).toEqual(call(api.post, '/auth/signup', payload));

    const mockResponse = {
      data: {
        currentUser: {
          email: '444@mail.ru',
          password: '444',
          login: '444',
        },
        token: 'token',
      },
    };
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    expect(generator.next(mockResponse).value).toEqual(put(gotAuth(mockResponse.data)));
    expect(setItemMock).toHaveBeenCalledWith('token', 'token');
    expect(generator.next().done).toBe(true);
  });

  test('should handle registration failure dispatching rejectedAuth', () => {
    const generator = registrationSaga(action);
    expect(generator.next().value).toEqual(call(api.post, '/auth/signup', payload));

    const mockError = { response: { data: { message: 'error' } } };

    expect(generator.throw(mockError).value)
      .toEqual(put(rejectedAuth(mockError.response.data.message)));
    expect(generator.next().done).toBe(true);
  });
});

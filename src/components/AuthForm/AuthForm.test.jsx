import '@testing-library/jest-dom';

import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import {
  render, screen, fireEvent, act, waitFor,
} from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import authReducer from '../../redux/reducers/authReducer';
import AuthForm from './AuthForm';

const TEST_EMAIL = 'test@mail.ru';
const TEST_PASSWORD = 'test_password';
const TEST_LOGIN = 'test_login';

const renderWithStore = (modalType) => {
  const store = configureStore({
    reducer: {
      auth: authReducer,
    },
    preloadedState: {
      auth: { modalType, error: null },
    },
  });

  return render(
    <MemoryRouter>
      <Provider store={store}>
        <AuthForm />
      </Provider>
    </MemoryRouter>,
  );
};

describe('AuthForm', () => {
  test('should correctly display the AuthForm for registration', () => {
    renderWithStore('signup');

    expect(screen.getByPlaceholderText('login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('example@dunice.net')).toBeInTheDocument();
  });
  test('should correctly display the AuthForm for logging', () => {
    renderWithStore('login');

    expect(screen.queryByPlaceholderText('login')).not.toBeInTheDocument();
  });

  test('should fill the signup form and submit', async () => {
    renderWithStore('signup');

    const loginField = await screen.findByPlaceholderText('login');
    const passwordField = await screen.findByPlaceholderText('password');
    const emailField = await screen.findByPlaceholderText('example@dunice.net');
    const submitButton = screen.getByRole('button', { name: /submit/i });
    const form = screen.queryByTestId('authForm');

    fireEvent.change(loginField, { target: { value: TEST_LOGIN } });
    fireEvent.change(passwordField, { target: { value: TEST_PASSWORD } });
    fireEvent.change(emailField, { target: { value: TEST_EMAIL } });

    expect(loginField).toHaveValue(TEST_LOGIN);
    expect(passwordField).toHaveValue(TEST_PASSWORD);
    expect(emailField).toHaveValue(TEST_EMAIL);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await waitFor(() => {
      expect(form).not.toBeInTheDocument();
    });
  });
});

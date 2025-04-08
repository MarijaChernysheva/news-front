import '@testing-library/jest-dom';
import React from 'react';
import {
  render, screen, fireEvent, act, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import AuthForm from './AuthForm';
import authReducer from '../../redux/reducers/authReducer';

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
  test('renders AuthForm correctly for signup', () => {
    renderWithStore('signup');

    expect(screen.getByPlaceholderText('login')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('example@dunice.net')).toBeInTheDocument();
  });
  test('renders AuthForm correctly for login', () => {
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

    fireEvent.change(loginField, { target: { value: 'test' } });
    fireEvent.change(passwordField, { target: { value: 'password123' } });
    fireEvent.change(emailField, { target: { value: 'test@dunice.net' } });

    expect(loginField).toHaveValue('test');
    expect(passwordField).toHaveValue('password123');
    expect(emailField).toHaveValue('test@dunice.net');
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await waitFor(() => {
      expect(form).not.toBeInTheDocument();
    });
  });
});

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router';
import Logout from './Logout';
import rootReducer from '../../redux/reducers/rootReducer';

const store = configureStore({ reducer: rootReducer });
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

const navigateMock = jest.fn();
describe('Logout', () => {
  beforeEach(() => {
    useNavigate.mockReturnValue(navigateMock);
  });
  test('Click button calls localStorage.removeItem', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Logout />
        </Provider>
      </MemoryRouter>,
    );
    const removeItemMock = jest.spyOn(Storage.prototype, 'removeItem');
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
    fireEvent.click(btn);
    expect(removeItemMock).toHaveBeenCalledWith('token');
    removeItemMock.mockRestore();
  });
  test('Click avatar calls navigate', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Logout />
        </Provider>
      </MemoryRouter>,
    );
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
    fireEvent.click(avatar);
    expect(navigateMock).toHaveBeenCalledWith('users/profile');
  });
});

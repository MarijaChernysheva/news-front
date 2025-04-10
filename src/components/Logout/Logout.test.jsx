import '@testing-library/jest-dom';

import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { render, screen, fireEvent } from '@testing-library/react';

import { Provider } from 'react-redux';
import { useNavigate } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import rootReducer from '../../redux/reducers/rootReducer';
import Logout from './Logout';

const store = configureStore({ reducer: rootReducer });
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
}));

const navigateMock = jest.fn();

const renderWithProviders = () => render(
  <MemoryRouter>
    <Provider store={store}>
      <Logout />
    </Provider>
  </MemoryRouter>,
);
describe('Logout', () => {
  beforeEach(() => {
    useNavigate.mockReturnValue(navigateMock);
  });
  test('should call localStorage.removeItem when the button is clicked', () => {
    renderWithProviders();
    const removeItemMock = jest.spyOn(Storage.prototype, 'removeItem');
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toMatchSnapshot();
    fireEvent.click(btn);
    expect(removeItemMock).toHaveBeenCalledWith('token');
    removeItemMock.mockRestore();
  });
  test('should call navigate when the avatar is clicked', () => {
    renderWithProviders();
    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
    fireEvent.click(avatar);
    expect(navigateMock).toHaveBeenCalledWith('users/profile');
  });
});

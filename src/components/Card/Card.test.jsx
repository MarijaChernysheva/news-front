import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Card from './Card';
import rootReducer from '../../redux/reducers/rootReducer';

const createTestStore = (isLoggedIn) => configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: { isLoggedIn },
  },
});

test('Renders correctly depending on isLoggedIn state', () => {
  let store = createTestStore(false);

  const { rerender } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Card author={{ id: 1, login: 'TestUser' }} />
      </Provider>
    </MemoryRouter>,
  );

  expect(screen.queryByRole('button')).not.toBeInTheDocument();

  store = createTestStore(true);

  rerender(
    <MemoryRouter>
      <Provider store={store}>
        <Card author={{ id: 1, login: 'TestUser' }} />
      </Provider>
    </MemoryRouter>,
  );
  expect(screen.getByRole('button', { name: /Author:TestUser/i })).toBeInTheDocument();
});

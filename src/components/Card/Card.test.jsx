import '@testing-library/jest-dom';

import React from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import rootReducer from '../../redux/reducers/rootReducer';
import Card from './Card';

const createTestStore = (isLoggedIn) => configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: { isLoggedIn },
  },
});

const AUTHOR = { id: 1, login: 'TestUser' };

test('should display the Card correctly depending on the isLoggedIn state', () => {
  let store = createTestStore(false);

  const { rerender } = render(
    <MemoryRouter>
      <Provider store={store}>
        <Card author={AUTHOR} />
      </Provider>
    </MemoryRouter>,
  );

  expect(screen.queryByRole('button')).not.toBeInTheDocument();

  store = createTestStore(true);

  rerender(
    <MemoryRouter>
      <Provider store={store}>
        <Card author={AUTHOR} />
      </Provider>
    </MemoryRouter>,
  );
  expect(screen.getByRole('button', { name: /Author:TestUser/i })).toBeInTheDocument();
});

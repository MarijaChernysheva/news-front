import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import reducer from './reducers/rootReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMIddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnchancers(applyMiddleware(sagaMIddleware)),
);

sagaMIddleware.run(rootSaga);

export default store;

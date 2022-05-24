import { combineReducers } from 'redux';

import newsReducer from './newsReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;

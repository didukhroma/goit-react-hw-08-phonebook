import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  contactsReducer,
  loadingReducer,
  filterReducer,
  errorReducer,
} from './contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware()];

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

const store = configureStore({
  reducer: { contacts: rootReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

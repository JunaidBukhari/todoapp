import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import todoReducer from './todoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'root',
  storage,
};
const reducer = combineReducers({
  login: loginReducer,
  todo: todoReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

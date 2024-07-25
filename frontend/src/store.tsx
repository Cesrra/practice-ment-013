import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import conversationsReducer from './states/conversationsSlice';
import usersReducer from './states/usersSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;


import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

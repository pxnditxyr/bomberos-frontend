import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth'
import { articleSlice } from './articles/articlesSlice';
import { categorySlice } from './categories';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    article: articleSlice.reducer,
    category: categorySlice.reducer,
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

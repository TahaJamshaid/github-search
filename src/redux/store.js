import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '../services/githubApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
  }
});

setupListeners(store.dispatch)
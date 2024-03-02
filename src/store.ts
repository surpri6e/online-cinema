import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { kinopoisApi } from './api/kinopoiskApi';

export const store = configureStore({
    reducer: {
        [kinopoisApi.reducerPath]: kinopoisApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoisApi.middleware),
});

setupListeners(store.dispatch);

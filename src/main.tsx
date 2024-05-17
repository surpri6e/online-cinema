import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { initializeApp } from 'firebase/app';
import { config } from './config.ts';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseApp = initializeApp(config);
export const db = getFirestore(firebaseApp);
export const auth = getAuth();

getAnalytics(firebaseApp);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { initializeApp } from 'firebase/app'
import { config } from './config.ts'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

export const firebaseApp = initializeApp({apiKey: config.apiKey, appId: config.appId, authDomain: config.authDomain, projectId: config.projectId, storageBucket: config.storageBucket, messagingSenderId: config.messagingSenderId, measurementId: config.measurementId})
export const db = getFirestore(firebaseApp)

getAnalytics(firebaseApp);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

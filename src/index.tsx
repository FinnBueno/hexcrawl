import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectDatabaseEmulator, getDatabase } from 'firebase/database';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectStorageEmulator, getStorage } from 'firebase/storage';
import { App } from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

initializeApp({
    apiKey: 'AIzaSyDNnBsqeDa-Bz7zw7KjC2wq11yZy8KvfOw',
    authDomain: 'hexcrawl-app.firebaseapp.com',
    projectId: 'hexcrawl-app',
    databaseURL:
        'https://hexcrawl-app-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'hexcrawl-app.appspot.com',
    messagingSenderId: '911360704971',
    appId: '1:911360704971:web:1d7cf8efe546fddaf3364e',
    measurementId: 'G-99KQG17EWX'
});

if (
    window.location.hostname === 'localhost' ||
    window.location.hostname.includes('192.168.')
) {
    connectAuthEmulator(getAuth(), 'http://localhost:9099');
    connectDatabaseEmulator(getDatabase(), 'localhost', 9000);
    connectFirestoreEmulator(getFirestore(), 'localhost', 8084);
    connectStorageEmulator(getStorage(), 'localhost', 9199);
}

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>{app}</React.StrictMode>
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

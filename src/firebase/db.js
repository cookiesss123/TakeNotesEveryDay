import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const { VITE_API_KEY, VITE_AUTH_DOMAIN, VITE_URL, VITE_SENDERID, VITE_APPID, VITE_MEASUREMENTID } = import.meta.env

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_AUTH_DOMAIN,
    databaseURL: VITE_URL,
    projectId: 'todolist-ca1a4',
    storageBucket: 'todolist-ca1a4.appspot.com',
    messagingSenderId: VITE_SENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID
}

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth }


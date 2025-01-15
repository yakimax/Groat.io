import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlZlsQNIVpYnl34f7DpSz7DrVZv7oANtc",
  authDomain: "groatio.firebaseapp.com",
  projectId: "groatio",
  storageBucket: "groatio.firebasestorage.app",
  messagingSenderId: "237298063160",
  appId: "1:237298063160:web:81dba3abcd96733cb653cd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
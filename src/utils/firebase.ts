// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLLsXenjnaAQwAcftXD9rcHSiIMnbFODM",
    authDomain: "prak-mobile-2207.firebaseapp.com",
    projectId: "prak-mobile-2207",
    storageBucket: "prak-mobile-2207.firebasestorage.app",
    messagingSenderId: "16609579814",
    appId: "1:16609579814:web:5b020c3d01c2f9ec0127e7"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
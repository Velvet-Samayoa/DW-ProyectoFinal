// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuXaKVVYDMEtCEqP8ZlKRNRnfUxnudo-4",
  authDomain: "proyecto-final-3f0f3.firebaseapp.com",
  projectId: "proyecto-final-3f0f3",
  storageBucket: "proyecto-final-3f0f3.appspot.com",
  messagingSenderId: "220112803862",
  appId: "1:220112803862:web:e69f39e96cb2e4ff227d37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();

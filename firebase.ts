// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa91723vpZ3sbCO7rh8mCbKHlePL0ouM8",
  authDomain: "netflix-823d5.firebaseapp.com",
  projectId: "netflix-823d5",
  storageBucket: "netflix-823d5.appspot.com",
  messagingSenderId: "363051750069",
  appId: "1:363051750069:web:a29b7ab9e5961d5fcb64fc",
  measurementId: "G-GMEQK51RJM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };

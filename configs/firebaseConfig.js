// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "benchmark-catalog.firebaseapp.com",
  projectId: "benchmark-catalog",
  storageBucket: "benchmark-catalog.appspot.com",
  messagingSenderId: "762069557889",
  appId: "1:762069557889:web:a971e14f57fdd03868a380",
  measurementId: "G-M3RFN7CYVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
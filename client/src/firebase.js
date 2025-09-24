// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-needforsoftwares.firebaseapp.com",
  projectId: "mern-needforsoftwares",
  storageBucket: "mern-needforsoftwares.firebasestorage.app",
  messagingSenderId: "453828141121",
  appId: "1:453828141121:web:7ae91b086e0f50577266c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
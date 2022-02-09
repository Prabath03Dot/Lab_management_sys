import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWH1VZSCVZj6Sfic2rSD7CGpOXqvlDLOc",
  authDomain: "auth-adf43.firebaseapp.com",
  projectId: "auth-adf43",
  storageBucket: "auth-adf43.appspot.com",
  messagingSenderId: "747531974958",
  appId: "1:747531974958:web:98f82559183541032be2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
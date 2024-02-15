// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqnsa7ebIljNTpYbtwNMWkS9vb8Bz8Cj0",
  authDomain: "chitchat-9c9a5.firebaseapp.com",
  projectId: "chitchat-9c9a5",
  storageBucket: "chitchat-9c9a5.appspot.com",
  messagingSenderId: "106306839618",
  appId: "1:106306839618:web:19b031a6fe758b70ceb9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

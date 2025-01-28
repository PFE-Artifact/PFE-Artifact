// Import the required functions from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGdFI_P-Zh3NiGEsUwWc3E06_dk1rquHg",
  authDomain: "artifact-9350d.firebaseapp.com",
  projectId: "artifact-9350d",
  storageBucket: "artifact-9350d.firebasestorage.app",
  messagingSenderId: "288689998231",
  appId: "1:288689998231:web:6ccd7339fe84ef2c8f1cd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize auth

export  { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };

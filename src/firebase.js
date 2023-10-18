import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "graduationproject-f88e0.firebaseapp.com",
  projectId: "graduationproject-f88e0",
  storageBucket: "graduationproject-f88e0.appspot.com",
  messagingSenderId: "535910247017",
  appId: "1:535910247017:web:d0fa237421a136604410f8",
  measurementId: "G-DL7CBE60KK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

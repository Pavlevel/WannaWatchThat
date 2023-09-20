// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDopKQc5p5eeGMDaVy6nk3sTnX4kHxQv4A",
  authDomain: "graduationproject-f88e0.firebaseapp.com",
  projectId: "graduationproject-f88e0",
  storageBucket: "graduationproject-f88e0.appspot.com",
  messagingSenderId: "535910247017",
  appId: "1:535910247017:web:d0fa237421a136604410f8",
  measurementId: "G-DL7CBE60KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
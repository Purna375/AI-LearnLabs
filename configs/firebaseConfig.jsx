// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: "ai-learnlabs.firebaseapp.com",
  projectId: "ai-learnlabs",
  storageBucket: "ai-learnlabs.appspot.com",
  messagingSenderId: "1061076035844",
  appId: "1:1061076035844:web:380315582c190f6a350851",
  measurementId: "G-YTSZFJ2QGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
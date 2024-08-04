// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmnsP28DVi0gFwwvPIM3qRPPjEwU5U28k",
  authDomain: "contact-app-ffc2d.firebaseapp.com",
  projectId: "contact-app-ffc2d",
  storageBucket: "contact-app-ffc2d.appspot.com",
  messagingSenderId: "126491603590",
  appId: "1:126491603590:web:bf9b27719b4ea627679707"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
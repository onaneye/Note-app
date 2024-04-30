// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz6j_w3g132dNzODU6X9T2iHgtphacq7g",
  authDomain: "react-notes-891f3.firebaseapp.com",
  projectId: "react-notes-891f3",
  storageBucket: "react-notes-891f3.appspot.com",
  messagingSenderId: "92697023065",
  appId: "1:92697023065:web:47cf70f57a758b19041748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
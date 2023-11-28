// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7_HNhVuZpWZ8rsnbD_-BqXGlQtRAV4aY",
  authDomain: "book-sphere-auth.firebaseapp.com",
  projectId: "book-sphere-auth",
  storageBucket: "book-sphere-auth.appspot.com",
  messagingSenderId: "99057273703",
  appId: "1:99057273703:web:3cca52ed714c58aa7abdc2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

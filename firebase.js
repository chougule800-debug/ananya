// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNn0lX3UzfKkZ2ivirPMb3vu9GNGLcfg",
  authDomain: "doc-det.firebaseapp.com",
  projectId: "doc-det",
  storageBucket: "doc-det.firebasestorage.app",
  messagingSenderId: "618914142158",
  appId: "1:618914142158:web:0ee8c35b219cf92533fd9f",
  measurementId: "G-CR3H21D0MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
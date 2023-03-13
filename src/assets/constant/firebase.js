// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtd_5c7unAiW3zj0ssvnv5FrcNHDScTu4",
  authDomain: "tradalim-dev.firebaseapp.com",
  projectId: "tradalim-dev",
  storageBucket: "tradalim-dev.appspot.com",
  messagingSenderId: "576217163119",
  appId: "1:576217163119:web:5ef7844909df01d6deb49a",
  measurementId: "G-L65BVK7ZE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
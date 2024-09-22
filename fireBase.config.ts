// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjG-vKhxSxGqOJMljk0Sm2_ukERymx-BY",
  authDomain: "ecommerce-mary-19c31.firebaseapp.com",
  projectId: "ecommerce-mary-19c31",
  storageBucket: "ecommerce-mary-19c31.appspot.com",
  messagingSenderId: "296796953022",
  appId: "1:296796953022:web:b02f0b9cec20096c9701ef",
  measurementId: "G-HE2Y4JJ2PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyBQ4L7leUHiGlB85XbR7YETFzF5oYeg4OM',
  authDomain: 'ecommers-mary.firebaseapp.com',
  projectId: 'ecommers-mary',
  storageBucket: 'ecommers-mary.appspot.com',
  messagingSenderId: '837887334101',
  appId: '1:837887334101:web:649e72460bacbe18f4b45c',
  measurementId: 'G-262PJEEW9C',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

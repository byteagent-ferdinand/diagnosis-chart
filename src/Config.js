// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from './firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoRB6rdGagAYYz5gePLw4kZr5C_F3c5tg",
  authDomain: "diagnosis-char.firebaseapp.com",
  projectId: "diagnosis-char",
  storageBucket: "diagnosis-char.appspot.com",
  messagingSenderId: "511587791512",
  appId: "1:511587791512:web:bc8705bf2ea2834f7fd6ed",
  measurementId: "G-V4D6HWPWQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const imageDb = getStorage(app);
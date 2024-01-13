import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
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
export const storage = getStorage(app);
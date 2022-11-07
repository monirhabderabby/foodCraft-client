// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAqt7m12PCYjlZ5GJbOjdxEXPAJQvHneg",
    authDomain: "foodcraft-1019f.firebaseapp.com",
    projectId: "foodcraft-1019f",
    storageBucket: "foodcraft-1019f.appspot.com",
    messagingSenderId: "418328788370",
    appId: "1:418328788370:web:7b8974aa302ea966eb954b",
    measurementId: "G-2B4F33CHHQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

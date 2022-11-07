// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtdq050_iYkHDNR0UuSUC3NckHAgRXNT0",
    authDomain: "foodcraft-8d822.firebaseapp.com",
    projectId: "foodcraft-8d822",
    storageBucket: "foodcraft-8d822.appspot.com",
    messagingSenderId: "717433154792",
    appId: "1:717433154792:web:9481130b4a7c62c7b66d5d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const auth = getAuth(app);

export default storage;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUkGKbmC9S4rcTVKU7TEbEvnfJDP8iWeI",
    authDomain: "foodcraft-631c7.firebaseapp.com",
    projectId: "foodcraft-631c7",
    storageBucket: "foodcraft-631c7.appspot.com",
    messagingSenderId: "327498043489",
    appId: "1:327498043489:web:32045733c02d55489ada20",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const auth = getAuth(app);

export default storage;

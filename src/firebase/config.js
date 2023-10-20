// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHH6o3Fs-VmwuV8PZ6uU9jjZgSBp6fY1Y",
    authDomain: "proyecto-react-de59d.firebaseapp.com",
    projectId: "proyecto-react-de59d",
    storageBucket: "proyecto-react-de59d.appspot.com",
    messagingSenderId: "1019919089193",
    appId: "1:1019919089193:web:5f911fad08e45ac320a638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
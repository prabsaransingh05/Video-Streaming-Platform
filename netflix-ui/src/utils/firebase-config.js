// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSheSWJYXITFUVfvg26AuyDKrQ44OF4Vc",
  authDomain: "react-netflix-clone-12228.firebaseapp.com",
  projectId: "react-netflix-clone-12228",
  storageBucket: "react-netflix-clone-12228.appspot.com",
  messagingSenderId: "650957426773",
  appId: "1:650957426773:web:daa590fad99a3b3d2a84dc",
  measurementId: "G-YL5T6YDM6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
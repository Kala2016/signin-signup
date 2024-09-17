// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDORqiDx5NcLhQAwHfnDrGEK1p-KO2FYkI",
  authDomain: "signin-signup-cb0fd.firebaseapp.com",
  projectId: "signin-signup-cb0fd",
  storageBucket: "signin-signup-cb0fd.appspot.com",
  messagingSenderId: "998244824708",
  appId: "1:998244824708:web:9b407a5fe314727b6634d1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth =getAuth();
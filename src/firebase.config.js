// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs32ZHEhjYWmthQOdzwT6fX5kQS64zuNQ",
  authDomain: "react-social-media-app-de781.firebaseapp.com",
  projectId: "react-social-media-app-de781",
  storageBucket: "react-social-media-app-de781.appspot.com",
  messagingSenderId: "1052688315170",
  appId: "1:1052688315170:web:900d0694bdac3845842b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app) 
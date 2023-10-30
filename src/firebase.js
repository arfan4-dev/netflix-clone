// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAEWKS4sDXYSIw9MgZOApKio8oP63SJWWw",
  authDomain: "netflix-clone-cd4e5.firebaseapp.com",
  projectId: "netflix-clone-cd4e5",
  storageBucket: "netflix-clone-cd4e5.appspot.com",
  messagingSenderId: "912135380804",
  appId: "1:912135380804:web:aa80323719e032595dc111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

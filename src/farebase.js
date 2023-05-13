// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKpPcIP5pe8MLeosJb_Y8zsBLlL-lHTXU",
  authDomain: "home-task-63bf0.firebaseapp.com",
  projectId: "home-task-63bf0",
  storageBucket: "home-task-63bf0.appspot.com",
  messagingSenderId: "825876005552",
  appId: "1:825876005552:web:1aa43395ce3dfd4021b175",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

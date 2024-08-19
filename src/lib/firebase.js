import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAgigUo-dkKdWG3y8bkHvrRWUwHfreMucU",
  authDomain: "reactchat-dbc86.firebaseapp.com",
  projectId: "reactchat-dbc86",
  storageBucket: "reactchat-dbc86.appspot.com",
  messagingSenderId: "1098289329359",
  appId: "1:1098289329359:web:d6a9da9c7510c22966f3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();
export const storage=getStorage();
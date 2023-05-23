import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7l1QQKL8bVFblRs6LOB4mATPyv36ykcg",
  authDomain: "mychat-9ed5d.firebaseapp.com",
  projectId: "mychat-9ed5d",
  storageBucket: "mychat-9ed5d.appspot.com",
  messagingSenderId: "419512978730",
  appId: "1:419512978730:web:c54e65c16ce2fb01b72253"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

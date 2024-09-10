import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

import { initializeAuth } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

const firebaseConfig = {
  apiKey: "AIzaSyAkE9nf-G-gW9Pv9ZSxRzyr0FL3G6XXJA8",
  authDomain: "ireps2.firebaseapp.com",
  projectId: "ireps2",
  storageBucket: "ireps2.appspot.com",
  messagingSenderId: "885517634969",
  appId: "1:885517634969:web:f013c3961097836245d708"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app);

export const auth = initializeAuth(app);

// initialize firebase storage
export const storage = getStorage(app);

// Initialize functions
export const functions = getFunctions(app);

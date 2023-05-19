// Import the functions need from the SDKs  need
import { initializeApp } from "firebase/app";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_appId,
};
console.log(import.meta.env.VITE_FIREBASE_apiKey);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

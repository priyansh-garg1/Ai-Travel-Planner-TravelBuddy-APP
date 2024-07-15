// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkWDTLQBgc2TBEHXJ6KYcMNTEldcyYBjk",
  authDomain: "ai-travel-planner-app-5e5ec.firebaseapp.com",
  projectId: "ai-travel-planner-app-5e5ec",
  storageBucket: "ai-travel-planner-app-5e5ec.appspot.com",
  messagingSenderId: "407798339629",
  appId: "1:407798339629:web:ab4b9474e0b2d6f58f80a4",
  measurementId: "G-Y9CEXF7CWM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(auth);

export const db = getFirestore(app)
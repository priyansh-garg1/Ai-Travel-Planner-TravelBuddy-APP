// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbPAQf2uCirar8adIfFfFw_XUBruQwbXg",
  authDomain: "ai-travel-planner-app-278d7.firebaseapp.com",
  projectId: "ai-travel-planner-app-278d7",
  storageBucket: "ai-travel-planner-app-278d7.appspot.com",
  messagingSenderId: "773199347568",
  appId: "1:773199347568:web:98387c30a9de13c92099b5",
  measurementId: "G-GJXBD888YZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
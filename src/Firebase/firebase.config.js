// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtF4OsbymooAFZNXEZd48t-oouQySmMGQ",
  authDomain: "motion-task-manager.firebaseapp.com",
  projectId: "motion-task-manager",
  storageBucket: "motion-task-manager.appspot.com",
  messagingSenderId: "519562953086",
  appId: "1:519562953086:web:a81f0304920006c241332f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
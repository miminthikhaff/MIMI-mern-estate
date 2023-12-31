// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mimi-mernestate.firebaseapp.com",
  projectId: "mimi-mernestate",
  storageBucket: "mimi-mernestate.appspot.com",
  messagingSenderId: "476259505623",
  appId: "1:476259505623:web:cc0fdeb61baf70fa6ca792",
  measurementId: "G-V3QLJZ9YPM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

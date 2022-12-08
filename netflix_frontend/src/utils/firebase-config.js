// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvblyCqzQ0rPAEalYl27K3f0RGuQgaOgA",
  authDomain: "react-netflix-clone-b050f.firebaseapp.com",
  projectId: "react-netflix-clone-b050f",
  storageBucket: "react-netflix-clone-b050f.appspot.com",
  messagingSenderId: "831383653905",
  appId: "1:831383653905:web:00b6552197dff6ae032bb0",
  measurementId: "G-NLJ246QHK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
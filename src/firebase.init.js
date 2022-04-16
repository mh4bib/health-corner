// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfXj8oHh4m0dm8tS9FxN-cv3odV5GuebI",
  authDomain: "health-corner-a79d1.firebaseapp.com",
  projectId: "health-corner-a79d1",
  storageBucket: "health-corner-a79d1.appspot.com",
  messagingSenderId: "271834519121",
  appId: "1:271834519121:web:d96e0abc8692c554810a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
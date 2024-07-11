
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH3qPnhZgGTEs1T9XODUt0N5dMShsCVlY",
  authDomain: "login1-8a347.firebaseapp.com",
  projectId: "login1-8a347",
  storageBucket: "login1-8a347.appspot.com",
  messagingSenderId: "843759469817",
  appId: "1:843759469817:web:ee3f528ac56263c6ab8e28",
  measurementId: "G-K4YS2Z9B9W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };

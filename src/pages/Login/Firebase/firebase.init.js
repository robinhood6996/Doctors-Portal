import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default initializeFirebase;
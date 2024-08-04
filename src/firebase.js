// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcBKmSKok1WIHjQ4-hzpkp1ED6ukAuD6s",
  authDomain: "repractice-bf3f1.firebaseapp.com",
  projectId: "repractice-bf3f1",
  storageBucket: "repractice-bf3f1.appspot.com",
  messagingSenderId: "606260349461",
  appId: "1:606260349461:web:0ca76e09cde275b7b25c1c",
  measurementId: "G-NXMLNMB20C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



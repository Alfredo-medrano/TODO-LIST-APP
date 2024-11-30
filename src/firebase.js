// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaJQC52j7Me7igvCyJ6nXnJV5i4syuwuo",
  authDomain: "todo-list-c64a4.firebaseapp.com",
  projectId: "todo-list-c64a4",
  storageBucket: "todo-list-c64a4.firebasestorage.app",
  messagingSenderId: "366917830525",
  appId: "1:366917830525:web:625d1e2bdc408c9de1ee14",
  measurementId: "G-8G2P4FKWJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
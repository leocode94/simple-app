// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDamaEt-0JKpDIqnax2sfRtvTptfTb9BAE",
  authDomain: "simple-app-c7cbb.firebaseapp.com",
  projectId: "simple-app-c7cbb",
  storageBucket: "simple-app-c7cbb.appspot.com",
  messagingSenderId: "56216240211",
  appId: "1:56216240211:web:a2339a3e4e61548da6c6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }
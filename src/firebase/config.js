// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZ2p6xIaAdR0XHOQ8DeDQZ_fN-BBxQbN0",
  authDomain: "compucell-8d167.firebaseapp.com",
  projectId: "compucell-8d167",
  storageBucket: "compucell-8d167.appspot.com",
  messagingSenderId: "271883751348",
  appId: "1:271883751348:web:02a2a2781a807d78bface1",
  measurementId: "G-TMVGYYNDXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const databaseFirestore = getFirestore(app)


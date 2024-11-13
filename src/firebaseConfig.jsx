import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFdaADuN_WyD604CK9LVGsviKYW08uuVE",
  authDomain: "brighterdaysahead-72251.firebaseapp.com",
  projectId: "brighterdaysahead-72251",
  storageBucket: "brighterdaysahead-72251.firebasestorage.app",
  messagingSenderId: "649787270266",
  appId: "1:649787270266:web:452d18b9421a9096b107c3",
  measurementId: "G-RGDZKGN8NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
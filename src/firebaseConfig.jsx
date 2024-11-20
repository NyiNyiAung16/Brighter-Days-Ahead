import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDMz0oEeI-nhJ2Xi50vmmYWIlTBPnJThCA",
  authDomain: "brighter-days-ahead.firebaseapp.com",
  projectId: "brighter-days-ahead",
  storageBucket: "brighter-days-ahead.firebasestorage.app",
  messagingSenderId: "379883154097",
  appId: "1:379883154097:web:796f71a73856feeb759090",
  measurementId: "G-6K7QVJDMFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
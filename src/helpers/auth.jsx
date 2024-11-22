import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const login = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.code);
    console.log(handleAuthError(error.code));
    throw new Error(handleAuthError(error.code));
  }
};

const register = async ({ username, email, password, role }) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "users", user.uid), { username, email, role, lastSupriseDate : null });
    }
  } catch (error) {
    throw new Error(handleAuthError(error.code));
  }
};

const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error(handleAuthError(error.code));
  }
};

const fetchAuthUser = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const userSnap = await getDoc(docRef);
    if (userSnap.exists()) {
      return userSnap.data();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const authErrorMessages = {
  "auth/invalid-email": "The email address is not valid.",
  "auth/user-disabled": "This user account has been disabled.",
  "auth/user-not-found": "No user found with this email.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/email-already-in-use":
    "This email is already in use by another account.",
  "auth/weak-password": "The password is too weak.",
  "auth/network-request-failed": "Network error. Please try again.",
  "auth/invalid-credential" : "Invalid credentials. Please try again.",
};
const defaultErrorMessage = "An unknown error occurred. Please try again.";

const handleAuthError = (errorCode) => {
  return authErrorMessages[errorCode] || defaultErrorMessage;
};

export { login, register, logout, fetchAuthUser };

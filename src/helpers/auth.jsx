import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebaseConfig'


const login = async ({ email, password }) => {
    try {
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        message(error.message);
    }
}


const register = async ({ username, email, password, role }) => {
    try {
        await createUserWithEmailAndPassword(auth,email,password);
        const user = auth.currentUser;
        if(user) {
            await setDoc(doc(db,'users',user.uid),{ username, email, role });
        }
    } catch (error) {
        console.log(error)
        message(error.message);
    }
}


const logout = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        console.log(error);
    }
}


const fetchAuthUser = async (uid) => {
    try {
        const docRef = doc(db,'users',uid);
        const userSnap = await getDoc(docRef);
        if(userSnap.exists()) {
            return userSnap.data();
        }
    } catch (error) {
        console.log(error)
    }
}


const message = (message) => {
    switch(message) {
        case 'Firebase: Error (auth/invalid-credential).':
            console.log('Invalid User')
        break;
        case 'Firebase: Error (auth/email-already-in-use).':
            console.log('email is already in used');
        break;
    }
}


export { login, register, logout, fetchAuthUser };
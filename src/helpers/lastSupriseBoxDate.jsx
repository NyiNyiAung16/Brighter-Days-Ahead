import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify"
import { db } from "../firebaseConfig";

const setLastSupriseDate = async (userId, today) => {
    try {
        await updateDoc(doc(db, "users", userId), { lastSupriseDate: today });
    } catch (error) {
        toast.error(error.message, { autoClose: 2000 });
    }
}

const getLastSupriseDate = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data().lastSupriseDate;
    } catch (error) {
        toast.error(error.message, { autoClose: 2000 });
    }
}


export { setLastSupriseDate, getLastSupriseDate };
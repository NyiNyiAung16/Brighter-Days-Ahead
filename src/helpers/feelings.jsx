import { collection, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { get, add, update, destroy } from './firestore'


const feelingsCollection = collection(db,'feelings');


const getFeelings = async () => {
    await get(feelingsCollection);
}


const setFeeling = async ({ text, user}) => {
    await add({ text, user },feelingsCollection);
}


const updateFeeling = async ( id ) => {
    const docRef = doc(db,'feelings',id);
    await update(docRef);
}


const deleteFeeling = async (id) => {
    const docRef = doc(db,'feelings',id);
    await destroy(docRef);
}


export { getFeelings, setFeeling, updateFeeling, deleteFeeling };


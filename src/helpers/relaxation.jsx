import { collection, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { get, add, update, destroy } from './firestore'


const relaxationCollection = collection(db,'relaxation');


const getRelaxation = async () => {
    await get(relaxationCollection);
}


const setRelax = async ({ message, videoUrl, user }) => {
    await add({ message, videoUrl, user },relaxationCollection);
}


const updateRelax = async ( id ) => {
    const docRef = doc(db,'relaxation',id);
    await update(docRef);
}


const deleteRelax = async (id) => {
    const docRef = doc(db,'relaxation',id);
    await destroy(docRef);
}


export { getRelaxation, setRelax, updateRelax, deleteRelax };


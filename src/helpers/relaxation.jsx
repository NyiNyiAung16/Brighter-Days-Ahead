import { collection, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { getAll, add, update, destroy } from './firestore'


const relaxationCollection = collection(db,'relaxation');


const getRelaxation = async () => {
    try {
        return await getAll(relaxationCollection);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


const setRelax = async ({ message, videoUrl, user }) => {
    try {
        return await add({ message, videoUrl, user },relaxationCollection);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


const updateRelax = async ( id, data ) => {
    try {
        const docRef = doc(db,'relaxation',id);
        return await update(docRef, data);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


const deleteRelax = async (id) => {
    try {
        const docRef = doc(db,'relaxation',id);
        return await destroy(docRef);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


export { getRelaxation, setRelax, updateRelax, deleteRelax };


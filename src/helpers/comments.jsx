import { collection, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { getAll, add, update, destroy } from './firestore'


const commentsCollection = collection(db,'comments');


const getComments = async () => {
    try {
        return await getAll(commentsCollection);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const addComment = async (comemnt) => {
    try {
        return await add(comemnt,commentsCollection);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const updateComment = async ( id, data ) => {
    try {
        const docRef = doc(db,'comments',id);
        return await update(docRef, data);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const deleteComment = async (id) => {
    try {
        const docRef = doc(db,'comments',id);
        return await destroy(docRef);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


export { getComments, addComment, updateComment, deleteComment };


import { collection, doc} from "firebase/firestore"
import { db } from "../firebaseConfig"
import { getAll, add, update, destroy, getDetail, getTotalCount, getPaginate } from './firestore'

const feelingsCollection = collection(db,'feelings');

const limit = 3;

const getFeelingsCount = async () => {
    try {
        return await getTotalCount(feelingsCollection,limit);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}

const getPaginatedFeelings = async () => {
    try {
        return await getPaginate(feelingsCollection,limit);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}

const getFeelings = async () => {
    try {
        return await getAll(feelingsCollection);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const getFeeling = async (id) => {
    try {
        return await getDetail(doc(db,'feelings',id));
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const setFeeling = async ({ text, user}) => {
    try {
        return await add({ text, user},feelingsCollection);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const updateFeeling = async ( id, data ) => {
    try {
        const docRef = doc(db,'feelings',id);
        return await update(docRef,data);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const deleteFeeling = async (id) => {
    try {
        const docRef = doc(db,'feelings',id);
        return await destroy(docRef);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


export { getFeelings ,getFeelingsCount, getPaginatedFeelings, getFeeling, setFeeling, updateFeeling, deleteFeeling };


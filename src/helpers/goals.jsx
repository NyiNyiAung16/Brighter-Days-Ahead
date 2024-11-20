import { collection, doc, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { getAll, add, update, destroy } from './firestore'


const goalsCollection = collection(db,'goals');


const getGoals = async () => {
    try {
        return await getAll(goalsCollection);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


const setGoal = async ( goal ) => {
    try {
        return await add(goal,goalsCollection);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


const updateGoal = async ( id, data ) => {
    try {
        const docRef = doc(db,'goals',id);
        return await update(docRef,data);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


const deleteGoal = async (id) => {
    try {
        const docRef = doc(db,'goals',id);
        return await destroy(docRef);
    } catch (error) {
       throw new Error(error?.message || "server error");
    }
}


export { getGoals, setGoal, updateGoal, deleteGoal };


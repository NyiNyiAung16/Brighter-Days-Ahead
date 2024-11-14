import { collection, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { get, add, update, destroy } from './firestore'


const goalsCollection = collection(db,'goals');


const getGoals = async () => {
    await get(goalsCollection);
}


const setGoal = async ( goal ) => {
    await add(goal,goalsCollection);
}


const updateGoal = async ( id ) => {
    const docRef = doc(db,'goals',id);
    await update(id,docRef);
}


const deleteGoal = async (id) => {
    const docRef = doc(db,'goals',id);
    await destroy(id,docRef);
}


export { getGoals, setGoal, updateGoal, deleteGoal };


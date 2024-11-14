import { addDoc, getDocs , updateDoc, deleteDoc } from "firebase/firestore"

const get = async (collection) => {
    try {
        //get goals
        let data = [];

        const querySnapshot = await getDocs(collection);
        querySnapshot.forEach((doc) => {
            data.push({ id: doc.id(),...doc.data()});
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}


const add = async ( data, collection ) => {
    try {
        //set goal
        const result = await addDoc(collection,data);
        return result;
    } catch (error) {
        console.log(error);
    }
}


const update = async ( docRef ) => {
    try {
        const updatedData = await updateDoc(docRef);
        return updatedData;
    } catch (error) {
        console.log(error);
    }
}


const destroy = async (docRef) => {
    try {
        await deleteDoc(docRef);
        return { success: true };
    } catch (error) {
        console.log(error);
    }
}


export { get, add, update, destroy };


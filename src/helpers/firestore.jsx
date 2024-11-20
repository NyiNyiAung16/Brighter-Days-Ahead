import {
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  getDoc,
  orderBy,
  limit,
  startAfter,
  query,
} from "firebase/firestore";

let lastVisibleDoc;

const getAll = async (collectionRef) => {
  try {
    let data = [];

    let docsRef = await getDocs(query(collectionRef, orderBy("createdAt",'desc')));

    docsRef.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

const getPaginate = async (collectionRef, pageSize) => {
  try {
    //get goals
    let data = [];

    const paginatedQuery = lastVisibleDoc
      ? query(
          collectionRef,
          orderBy("createdAt", "desc"),
          limit(pageSize),
          startAfter(lastVisibleDoc)
        )
      : query(collectionRef, orderBy("createdAt", "desc"), limit(pageSize));

    const querySnapshot = await getDocs(paginatedQuery);

    lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

const getTotalCount = async (collectionRef, pageSize) => {
  try {
    const total = await getDocs(collectionRef);
    const totalCount = total.size;
    const totalPages = Math.ceil(totalCount / pageSize);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return { totalCount, pages };
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

const getDetail = async (docRef) => {
  try {
    const docSnap = await getDoc(docRef);
    return { ...docSnap.data(), id: docSnap.id };
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

const add = async (data, collectionRef) => {
  try {
    //set goal
    const result = await addDoc(collectionRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
    return result;
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

const update = async (docRef, data) => {
  try {
    const updatedData = await updateDoc(docRef, data);
    return updatedData;
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

const destroy = async (docRef) => {
  try {
    await deleteDoc(docRef);
    return { success: true };
  } catch (error) {
    throw new Error(error?.message || "server error");
  }
};

export { getAll, getPaginate, getTotalCount, getDetail, add, update, destroy };

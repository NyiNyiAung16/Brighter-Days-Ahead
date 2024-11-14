import { uploadBytes, getDownloadURL, deleteObject, ref } from 'firebase/storage'
import { storage } from '../firebaseConfig';


const storageRef = ref(storage,'gallery');

const addPhoto = async (file) => {
    try {
        const photoData = await uploadBytes(storageRef,file);
        return photoData;
    } catch (error) {
        console.log(error);
    }
}


const getPhoto = async (filename) => {
    try {
        //get photo
        const photoRef = ref(storage,`gallery/${filename}`);
        const url = await getDownloadURL(photoRef);
        return url;
    } catch (error) {
        console.log(error);
    }
}


const deletePhoto = async (filename) => {
    try {
        //delete
        const photoRef = ref(storage,`gallery/${filename}`);
        await deleteObject(photoRef);
    } catch (error) {
        console.log(error);
    }
}


const previewPhoto = (e) => {
    if (!e || !e.target || !e.target.files) {
        throw new Error('The file object is invalid');
    }

    const tempFiles = e.target.files;

    let tempPreviewImages = [];

    if (!tempFiles || !tempFiles.length) {
        return { tempFiles: [], tempPreviewImages };
    }

    const promises = [...tempFiles].map((file) => {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = () => {
                resolve(reader.result);
            }

            reader.onerror = (error) => {
                reject(error);
            }

            reader.readAsDataURL(file);
        });
    });

    return Promise.all(promises).then((results) => {
        tempPreviewImages = results;
        return { tempFiles, tempPreviewImages };
    }).catch((error) => {
        console.error(error);
        return { tempFiles: [], tempPreviewImages };
    });
}



export { addPhoto, getPhoto, deletePhoto, previewPhoto };
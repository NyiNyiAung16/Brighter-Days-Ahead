import axios from "axios";
import { collection } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { add, getAll } from '../helpers/firestore'

const upload_preset = import.meta.env.VITE_UPLOAD_PRESET_NAME;
const cloud_name = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const uploadUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const galleryCollection = collection(db,'gallery');

const getPhotos = async () => {
    try {
       return await getAll(galleryCollection);
    } catch (error) {
        throw new Error(error?.message || "server error");
    }
}


const storePhoto = async (file, user) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', upload_preset);
    
        const res = await axios.post(uploadUrl, formData);
        const data = {
            url: res.data.url,
            publicId: res.data.public_id,
            filename: res.data.display_name,
            user,
        }

        let docRef = await add(data,galleryCollection);
        return { ...data, id: docRef.id };
    } catch (error) {
        throw new Error(error?.message || "server error");
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



export { previewPhoto, storePhoto, getPhotos };
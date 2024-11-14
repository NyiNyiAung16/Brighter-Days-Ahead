import { useState } from "react";
import UploadMemoriesModal from "./BaseModal";
import BaseError from "./BaseError";
import { addPhoto, previewPhoto } from "../helpers/gallery";

export default function UploadMemories() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError ] = useState(null);


  const handleOnChange = async (e) => {
    try {
      const { tempFiles, tempPreviewImages } = await previewPhoto(e);
      setFile(tempFiles[0]);
      setPreviewUrl(tempPreviewImages[0]);
    } catch (error) {
      setError(error.message);
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!file) {
      setError('Photo is required.');
      setTimeout(() => {
        setError(null);
      }, 2000);
      return;
    };

    console.log(file);
    await addPhoto(file);
  }

    return (
        <UploadMemoriesModal id="uploadMemoriesModal" title="Upload Memories">
        <form className="space-y-2" onSubmit={handleSubmit}>
            <input type="file" className="file-input w-full" onChange={handleOnChange}/>
            {previewUrl && <img src={previewUrl} className="w-[100px] rounded object-cover"/>}
            {error && <BaseError message={error}/>}
            <button className="btn btn-outline btn-sm " type="submit">
              Upload
            </button>
        </form>
      </UploadMemoriesModal>
    )
}
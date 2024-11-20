import { useState } from "react";
import BaseError from "./BaseError";
import { storePhoto, previewPhoto } from "../helpers/gallery";
import FormButton from "./FormButton";
import { useUser} from "../helpers/useAuth";
import { toast } from "react-toastify";
import useGallery from "../helpers/useGallery";

export default function UploadMemories() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const galleryContext = useGallery();
  const user = useUser();

  const handleOnChange = async (e) => {
    try {
      const { tempFiles, tempPreviewImages } = await previewPhoto(e);
      setFile(tempFiles[0]);
      setPreviewUrl(tempPreviewImages[0]);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!file) {
        setError("Photo is required.");
        setTimeout(() => {
          setError(null);
        }, 2000);
        return;
      }
      let data = await storePhoto(file, user);
      if(data) {
        galleryContext?.setGallery((prevGallery) => [data, ...prevGallery]);
      }
      toast.success("Photo uploaded successfully.", { autoClose: 2000 });
      resetForm();
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input
        type="file"
        className="file-input w-full"
        onChange={handleOnChange}
      />
      {previewUrl && (
        <img src={previewUrl} className="w-[100px] rounded object-cover" />
      )}
      {error && <BaseError message={error} />}
      <FormButton isLoading={isLoading} label="Upload" />
    </form>
  );
}

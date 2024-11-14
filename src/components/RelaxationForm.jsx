import { useState } from "react";
import RelaxationModal from "./BaseModal";
import BaseError from "./BaseError";
import { relaxationValidation } from "../helpers/validation";
import { setRelax } from "../helpers/relaxation";

export default function RelaxationForm() {
  const [message, setMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [errors, setErrors] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { errors, data } = relaxationValidation({ message, videoUrl });
    if(errors) {
      setErrors(errors);
      setTimeout(() => {
        setErrors(null);
      }, 2000);
    } else {
      console.log(data);
      await setRelax({ message, videoUrl, user: 'mgmg' })
      resetForm();
    }
  }


  const resetForm = () => {
    setMessage('');
    setVideoUrl('');
    setErrors(null);
  }

  return (
    <RelaxationModal id="relaxationModal" title="Sugget Relaxation Video">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <textarea
          className="w-full textarea textarea-bordered text-gray-100 resize-none h-[100px]"
          placeholder="tell your feeling"
          value={message}
          onInput={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors?.message && <BaseError message={errors.message.message}/>}
        <input
          type="text"
          className="w-full input input-bordered text-gray-100"
          placeholder="youtube link"
          value={videoUrl}
          onInput={(e) => setVideoUrl(e.target.value)}
        />
        {errors?.videoUrl && <BaseError message={errors.videoUrl.message}/>}
        <button className="btn btn-outline btn-sm " type="submit">
          Submit
        </button>
      </form>
    </RelaxationModal>
  );
}

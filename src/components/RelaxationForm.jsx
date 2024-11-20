import { useEffect, useState } from "react";
import BaseError from "./BaseError";
import { relaxationValidation } from "../helpers/validation";
import { setRelax, updateRelax } from "../helpers/relaxation";
import { useUser} from "../helpers/useAuth";
import FormButton from "./FormButton";
import { toast } from "react-toastify";
import useRelaxation from "../helpers/useRelaxation";

export default function RelaxationForm({ relaxation }) {
  const [message, setMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const user = useUser();

  const relaxationContext = useRelaxation();

  useEffect(() => {
    if (relaxation) {
      setMessage(relaxation.message);
      setVideoUrl(relaxation.videoUrl);
    }
  }, [relaxation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { errors } = relaxationValidation({ message, videoUrl });
      if (errors) {
        setErrors(errors);
        setTimeout(() => setErrors(null), 2000);
        return;
      }

      if (relaxation) {
        if( relaxation.user.id !== user.id ) return ;

        await updateRelax(relaxation.id, { message, videoUrl });
        relaxationContext?.setRelaxations((prevRelaxations) =>
          prevRelaxations.map((prevRelaxation) =>
            prevRelaxation.id === relaxation.id
              ? { ...prevRelaxation, message, videoUrl }
              : prevRelaxation
          )
        );
        toast.success("Relaxation updated successfully.", { autoClose: 2000 });
      } else {
        let relaxation = await setRelax({
          message,
          videoUrl,
          user,
        });

        relaxationContext?.setRelaxations((prevRelaxations) => [
          {
            id: relaxation.id,
            message,
            videoUrl,
            user,
          },
          ...prevRelaxations,
        ]);
        toast.success("Relaxation submitted successfully.", {
          autoClose: 2000,
        });
      }
      resetForm();
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setMessage("");
    setVideoUrl("");
    setErrors(null);
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <textarea
        className="w-full textarea textarea-bordered text-gray-100 resize-none h-[100px]"
        placeholder="tell your feeling"
        value={message}
        onInput={(e) => setMessage(e.target.value)}
      ></textarea>
      {errors?.message && <BaseError message={errors.message.message} />}
      <input
        type="text"
        className="w-full input input-bordered text-gray-100"
        placeholder="youtube link"
        value={videoUrl}
        onInput={(e) => setVideoUrl(e.target.value)}
      />
      {errors?.videoUrl && <BaseError message={errors.videoUrl.message} />}
      <FormButton isLoading={isLoading} label="Submit" />
    </form>
  );
}

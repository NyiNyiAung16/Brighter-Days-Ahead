import { useEffect, useState } from "react";
import { feelingValidation } from "../helpers/validation";
import BaseError from "./BaseError";
import { setFeeling, updateFeeling } from "../helpers/feelings";
import { useUser} from "../helpers/useAuth";
import FormButton from "./FormButton";
import { toast } from "react-toastify";
import useFeeling from "../helpers/useFeeling";

export default function TellFeelingForm({ feeling }) {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const feelingContext = useFeeling();

  useEffect(() => {
    if (feeling) {
      setText(feeling.text);
    }
  }, [feeling]);

  const user = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { errors } = feelingValidation({ text });
      if (errors) {
        setErrors(errors);
        setTimeout(() => {
          setErrors("");
        }, 2000);
        return;
      }

      if (feeling) {
        if( feeling.user.id !== user.id ) return;

        await updateFeeling(feeling.id, { text });
        feelingContext?.setFeelings((prevFeelings) =>
          prevFeelings.map((prevFeeling) =>
            prevFeeling.id === feeling.id
              ? { ...prevFeeling, text }
              : prevFeeling
          )
        );
        toast.success("Feeling updated successfully.", { autoClose: 2000 });
      } else {
        let feeling = await setFeeling({ text, user });
        feelingContext?.setFeelings((prevFeelings) => [
          { id: feeling.id, text, user },
          ...prevFeelings,
        ]);
        toast.success("Feeling submitted successfully.", { autoClose: 2000 });
      }
      setText("");
    } catch (error) {
      toast.error(error.message, { autoClose: 2000 });
    } finally {
      setIsLoading(false);
      document.getElementById('editFeelingModal').close();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full textarea text-white resize-none h-[150px] border-gray-200"
        value={text}
        onInput={(e) => setText(e.target.value)}
      ></textarea>
      {errors?.text && <BaseError message={errors.text.message} />}
      <FormButton isLoading={isLoading} label="Submit" />
    </form>
  );
}

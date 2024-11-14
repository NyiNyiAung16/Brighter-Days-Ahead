import { useState } from "react";
import TellFeelingFormModal from "./BaseModal";
import { feelingValidation } from "../helpers/validation";
import BaseError from "./BaseError";
import { setFeeling } from "../helpers/feelings";
import useAuth from '../helpers/useAuth'

export default function TellFeelingForm() {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState(null);

  const { currentUser } = useAuth();
  console.log(currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { errors, data } = feelingValidation({ text });
        if(errors) {
            setErrors(errors);
            setTimeout(() => {
                setErrors('');
            }, 2000);
        }else {
            console.log(data)
            const user = {
              name: currentUser.username,
            }
            await setFeeling({ text, user })
            setText('');
        }
    }

  return (
    <TellFeelingFormModal id="tellFeelingModal" title="Tell Feeling">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full textarea text-white resize-none h-[150px] border-gray-200"
          value={text}
          onInput={(e) => setText(e.target.value)}
        ></textarea>
        { errors?.text && <BaseError message={errors.text.message}/>}
        <button className="btn btn-outline btn-sm " type="submit">
          Submit
        </button>
      </form>
    </TellFeelingFormModal>
  );
}

import { UseFormRegister } from "react-hook-form";
// eslint-disable-next-line import/no-cycle
import { SchemaType } from "../pages/registration";

interface Props {
  // display name
  fieldName: string;
  // internal name
  name: keyof SchemaType;
  // placeholder display text
  placeholder: string;
  // register function from RHF
  register: UseFormRegister<SchemaType>;
  // error message
  error: any;
}

// TODO: remove wacko default styling on firefox
const RegistrationInput = ({ fieldName, name, placeholder, register, error }: Props) => {
  return (
    <div className="w-full">
      <p>{fieldName}</p>
      <input
        className="bg-transparent w-full border-b-2 duration-200 border-grey bg-black p-1 ease-in-out placeholder-grey focus:border-blue-mid"
        type="text"
        placeholder={placeholder}
        {...register(name)}
      />
      {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
    </div>
  );
};

export default RegistrationInput;

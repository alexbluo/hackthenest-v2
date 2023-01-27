import { UseFormRegister } from "react-hook-form";
// eslint-disable-next-line import/no-cycle
import { SchemaType } from "../pages/registration";

interface Props {
  // display name
  fieldName: string;
  // internal name
  name: keyof SchemaType;
  // register function from RHF
  register: UseFormRegister<SchemaType>;
  // error message
  error: any;
}

const RegistrationInput = ({ fieldName, name, register, error }: Props) => {
  console.log(error);

  return (
    <div className="w-full">
      <p>{fieldName}</p>
      <input
        className="bg-transparent w-full border-b-2 border-grey bg-black py-2 shadow duration-200 ease-in-out focus:border-blue-light"
        type="text"
        placeholder=" Type your answer here..."
        {...register(name)}
      />
      {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
    </div>
  );
};

export default RegistrationInput;

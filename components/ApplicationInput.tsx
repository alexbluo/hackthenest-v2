import { FieldError, UseFormRegister } from "react-hook-form";
// eslint-disable-next-line import/no-cycle
import { SchemaType } from "../pages/app/hacker";

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
  error: FieldError | undefined;
}

// 1 px higher bottom border on focus, animate from left
const ApplicationInput = ({
  fieldName,
  name,
  placeholder,
  register,
  error,
}: Props) => {
  return (
    <div className="w-full">
      <h3>
        {fieldName} {error && <span className="text-red">{error.message}</span>}
      </h3>
      <input
        className="w-full border-b-2 border-grey bg-black bg-transparent py-1 placeholder-grey duration-200 ease-in-out focus:border-blue-mid"
        type="text"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default ApplicationInput;

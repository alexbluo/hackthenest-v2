import { Control, Controller, FieldValues } from "react-hook-form";
import Select, { SingleValue } from "react-select";

interface Option {
  value: string | null;
  label: string;
}

interface Props {
  // displayed above field
  fieldName: string;
  // internal name
  name: string;
  // options list
  options: Option[];
  // default value - also controls placeholder
  defaultValue: string | null;
  // control from RHF
  control: Control<FieldValues, any>;
}

const RegistrationDropdown = ({fieldName, name, options, defaultValue, control}: Props) => {
  return (
    <div>
      <p>{fieldName}</p>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            className="w-1/3 border-separate rounded"
            ref={ref}
            instanceId={name}
            options={options}
            value={options.find((el) => el.value === value)}
            onChange={(newValue: SingleValue<Option>) =>
              onChange(newValue?.value)
            }
            styles={{
              control: (base, state) => ({
                ...base,
                borderColor: state.isFocused ? "#61a7cf" : "#808080",
                backgroundColor: "#181818",
                color: "#ffffff",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#61a7cf" : "#181818",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#181818",
                borderColor: "#61a7cf",
                borderWidth: "2px",
              }),
              input: (base) => ({
                ...base,
                color: "#ffffff",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#ffffff",
              }),
            }}
          />
        )}
      />
    </div>
  );
};

export default RegistrationDropdown;

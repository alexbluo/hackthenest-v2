import { Control, Controller, FieldError } from "react-hook-form";
import Select, { SingleValue } from "react-select";
// eslint-disable-next-line import/no-cycle
import { SchemaType } from "../pages/application";

interface Option {
  value: string | number | null | undefined;
  label: string;
}

interface Props {
  // displayed above field
  fieldName: string;
  // internal name
  name: keyof SchemaType;
  // options list
  options: Option[];
  // default value - also controls placeholder
  defaultValue: string | true | undefined;
  // control from RHF
  control: Control<SchemaType>;
  // error message
  error: FieldError | undefined;
}

const ApplicationDropdown = ({
  fieldName,
  name,
  options,
  defaultValue,
  control,
  error,
}: Props) => {
  return (
    <div>
      <h3>
        {fieldName} {error && <span className="text-red">*</span>}
      </h3>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            className="w-full border-separate rounded"
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
                backgroundColor: "#1a1a1a",
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: "2px",
                borderColor: state.menuIsOpen ? "#ffffff00" : "#808080",
                boxShadow: "none",
                borderRadius: 0,
                minHeight: 0,
                alignItems: "center",
                paddingTop: "4px",
                paddingBottom: "4px",
                cursor: "pointer",
                "&:hover": {
                  borderColor: state.menuIsOpen ? "#ffffff00" : "#808080",
                },
              }),
              option: () => ({
                padding: "8px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#2396bf",
                },
              }),
              valueContainer: (base) => ({
                ...base,
                padding: 0,
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#1a1a1a",
                borderColor: "#2386bf",
                borderWidth: "2px",
                marginTop: 0,
                marginBottom: 0,
                borderRadius: 0,
              }),
              menuList: () => ({}),
              indicatorSeparator: () => ({
                width: 0,
              }),
              dropdownIndicator: (base) => ({
                ...base,
                padding: 0,
              }),
              input: (base) => ({
                ...base,
                color: "#ffffff",
                margin: 0,
                paddingTop: 0,
                paddingBottom: 0,
              }),
              singleValue: (base) => ({
                ...base,
                color: "#ffffff",
                padding: 0,
                margin: 0,
              }),
              placeholder: (base) => ({
                ...base,
                padding: 0,
                margin: 0,
              }),
            }}
          />
        )}
      />
    </div>
  );
};

export default ApplicationDropdown;

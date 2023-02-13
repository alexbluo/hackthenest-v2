import { Control, Controller } from "react-hook-form";
import Select, { SingleValue } from "react-select";
// eslint-disable-next-line import/no-cycle
import { SchemaType } from "../pages/application";

interface Option {
  value: string | undefined;
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
}

const ApplicationDropdown = ({
  fieldName,
  name,
  options,
  defaultValue,
  control,
}: Props) => {
  return (
    <div>
      <p>{fieldName}</p>
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
                backgroundColor: "#181818",
                // color: "#fff482386bf,,// 482386bf,,// 482386bf,,// 482386bf,,// 482386bf,,// 482386bf,,// 482386bf,,// fff",
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: state.menuIsOpen ? 0 : "2px",
                borderColor: "#808080",
                boxShadow: "none",
                borderRadius: 0,
                minHeight: 0,
                alignItems: "center",
                padding: "4px",
                cursor: "pointer",
              }),
              option: (base) => ({
                ...base,
                backgroundColor: "#181818",
                padding: "8px",
                cursor: "pointer",
              }),
              valueContainer: (base) => ({
                ...base,
                padding: 0,
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#181818",
                borderColor: "#2386bf",
                borderWidth: "2px",
                marginTop: 0,
                marginBottom: 0,
                borderRadius: 0,
              }),
              menuList: () => ({
                paddingTop: 0,
                paddingBottom: 0,
              }),
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
              }),
            }}
          />
        )}
      />
    </div>
  );
};

export default ApplicationDropdown;

import { HackerApp, VolunteerApp } from "@prisma/client";
import { Control, Controller, FieldError, Merge } from "react-hook-form";
import Select from "react-select";

interface Option {
  value: string | number | null | undefined;
  label: string;
}

interface Props {
  // displayed above field
  fieldName: string;
  // internal name
  name: keyof HackerApp | keyof VolunteerApp;
  // options list
  options: Option[];
  // control from RHF
  control: Control<HackerApp> | Control<VolunteerApp>;
  // error message
  error:
    | Merge<
        FieldError,
        [(FieldError | undefined)?, ...(FieldError | undefined)[]]
      >
    | undefined;
}

const ApplicationDropdown = ({
  fieldName,
  name,
  options,
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
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            className="w-full border-separate rounded"
            ref={ref}
            instanceId={name}
            options={options}
            value={options.find((el) => el.value === value)}
            onChange={(newValue: any) => onChange(newValue?.value)}
            styles={{
              control: (base, state) => ({
                ...base,
                backgroundColor: "transparent",
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
                  backgroundColor: "#2386bf",
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
                marginTop: "-2px",
                marginBottom: 0,
                borderRadius: 0,
              }),
              menuList: (base) => ({ ...base, padding: 0 }),
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
              multiValue: (base) => ({
                ...base,
                backgroundColor: "#2386bf",
                color: "#ffffff",
                gap: "4px",
                margin: 0,
                marginRight: "4px",
                cursor: "default",
              }),
              multiValueRemove: () => ({
                paddingRight: "4px",
                cursor: "pointer",
              }),
              multiValueLabel: (base) => ({
                ...base,
                padding: 0,
                color: "#ffffff",
              }),
              clearIndicator: (base) => ({
                ...base,
                padding: 0,
              }),
            }}
          />
        )}
      />
    </div>
  );
};

export default ApplicationDropdown;

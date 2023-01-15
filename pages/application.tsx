import { useForm } from "react-hook-form";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { optionCSS } from "react-select/dist/declarations/src/components/Option";

const Application = () => {
  const ageOptions = ["13", "14", "15", "16", "17", "18"];

  const roleOptions = ["Hacker", "Volunteer", "Mentor", "Chaperone"];

  const dietOptions = [
    "Vegan",
    "Vegetarian",
    "Peanut allergies",
    <input placeholder="Other..."></input>,
  ];

  const whereOptions = [
    "Friends/Family",
    "LinkedIn",
    "Instagram",
    "Twitter",
    "Facebook",
    <input placeholder="Other..."></input>,
  ];
  const agreeOptions = ["Yes", "No"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  

  const [age, setAge] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("firstName"));

  return (
    <section className="h-[160rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-28 py-20 px-40  text-xl" id="names">
          <div className="w-1/2 flex-col">
            <div className="relative font-bold">What is your first name? *</div>

            <input
              className="bg-transparent h-10 w-full rounded shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("firstName", {
                required: true,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            ></input>
            {errors.firstName?.type === "required" && (
              <p role="alert">This field is required</p>
            )}
          </div>

          <div className="w-1/2 flex-col">
            <div className="relative font-bold">What is your last name? *</div>

            <input
              className="bg-transparent h-10 w-full rounded shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("lastName", {
                required: true,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            ></input>
            {errors.lastName?.type === "required" && (
              <p role="alert">This field is required</p>
            )}
          </div>
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">What is your email? *</div>

          <input
            className="bg-transparent h-10 w-full rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
            {...register("email", {
              required: true,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          ></input>
          {errors.email?.type === "required" && (
            <p role="alert">This field is required</p>
          )}
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">What is your phone number? *</div>

          <input
            className="bg-transparent h-10 w-full rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
            {...register("phoneNumber", {
              required: true,
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
          ></input>
          {errors.phoneNumber?.type === "required" && (
            <p role="alert">This field is required</p>
          )}
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold" >What is your age? *</div>

          <Dropdown
          options={ageOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
            
            /*{...register("age", {
              required: true,
            })}
            aria-invalid={errors.age ? "true" : "false"}
            /*onChange={(e) => setAge(e.target.value)}
          */
          >
           
          </Dropdown>
          {/*{errors.age?.type === "required" && (
            <p role="alert">This field is required</p>
          )}*/}
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">Im registering as a ...</div>

          <Dropdown
            options={roleOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          ></Dropdown>
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">
            Do you have any dietary restrictions?
          </div>

          <Dropdown
            options={dietOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          ></Dropdown>
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">What is your referral code?</div>

          <input
            className="bg-transparent h-10 w-1/2 rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
          ></input>
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">Where did you hear about us?</div>

          <Dropdown
            options={whereOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          ></Dropdown>
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl" id="email">
          <div className="relative font-bold">
            Do you agree with the MLH terms and conditions?
          </div>

          <Dropdown
            options={agreeOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          ></Dropdown>
        </div>

        <div className="gap-28 py-20 px-40">
          <button className="rounded-lg border px-12 py-4 hover:bg-orange">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Application;

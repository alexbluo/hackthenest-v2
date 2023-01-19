import Dropdown from "react-dropdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "react-dropdown/style.css";

// TODO: move options to inline
// fix other - search up
// reduce vertical spacing
// styles
// types
// make dropdown update formstate
// validation:
// - email, phone number, types, etc.
// checkboxes for mlh
// add field for additional questions/comments
// better placeholder text

import * as z from "zod";

const schema = z.object({
  firstName: z.string().nonempty('Field is required'),
  lastName: z.string().nonempty('Field is required'),
  email: z.string().nonempty('Field is required'),
  phoneNumber: z.string().nonempty('Field is required'),
  
});

const Application = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="h-[160rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-28 py-20 px-40 text-xl">
          <div className="w-1/2 flex-col">
            <div className="relative font-bold">First Name *</div>

            <input
              className="bg-transparent h-10 w-full rounded shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("firstName")}
            />
            {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
          </div>

          <div className="w-1/2 flex-col">
            <div className="relative font-bold">Last Name *</div>
            <input
              className="bg-transparent h-10 w-full rounded shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("lastName")}
            />
            {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
          </div>
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">Email *</div>
          <input
            className="bg-transparent h-10 w-full rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl">
          <div className="font-bold">Phone Number *</div>
          <input
            className="bg-transparent h-10 w-full rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
            {...register("phoneNumber")}
          />
          {errors.phoneNumber?.message && <p>{errors.phoneNumber?.message}</p>}
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">Age *</div>
          <Dropdown
            options={["13", "14", "15", "16", "17", "18"]}
            placeholder="Select an option..."
            className="w-1/3 rounded"

            /* {...register("age", {
              required: true,
            })}
            aria-invalid={errors.age ? "true" : "false"}
            /*onChange={(e) => setAge(e.target.value)}
          */
          />
          {/* {errors.age?.type === "required" && (
            <p role="alert">This field is required</p>
          )} */}
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="relative font-bold">Dietary restrictions</div>
          <Dropdown
            options={[
              "Vegan",
              "Vegetarian",
              "Peanut allergies",
              // <input placeholder="Other..." />,
            ]}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          />
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">Referral Code</div>
          <input
            className="bg-transparent h-10 w-1/2 rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
          />
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">Where did you hear about us?</div>
          <Dropdown
            options={[
              "Friends/Family",
              "LinkedIn",
              "Instagram",
              "Twitter",
              "Facebook",
              // <input placeholder="Other..." />,
            ]}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          />
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">
            I have read and agree to the&nbsp;
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
              rel="noreferrer"
            >
              MLH Code of Conduct
            </a>
          </div>
          <Dropdown
            options={agreeOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          />
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">
            I authorize you to share my application/registration information
            with Major League Hacking for event administration, ranking, and MLH
            administration in-line with the&nbsp;
            <a href="https://mlh.io/privacy" target="_blank" rel="noreferrer">
              MLH Privacy Policy
            </a>
            . I further agree to the terms of both the&nbsp;
            <a
              href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
              target="_blank"
              rel="noreferrer"
            >
              MLH Contest Terms and Conditions
            </a>
            and the MLH Privacy Policy.
          </div>
          <Dropdown
            options={agreeOptions}
            placeholder="Select an option..."
            className="w-1/3 rounded"
          />
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

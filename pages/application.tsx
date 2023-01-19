import Dropdown from "react-dropdown";
import { useForm } from "react-hook-form";
import "react-dropdown/style.css";

// TODO: move options to inline
// fix other - search up
// reduce vertical spacing
// styles
// types
// validation
// - email, phone number, types, etc.
// checkboxes for mlh
// add field for additional questions/comments
// better placeholder text

const Application = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const ageOptions = ["13", "14", "15", "16", "17", "18"];

  const roleOptions = ["Hacker", "Volunteer", "Mentor", "Chaperone"];

  const dietOptions = [
    "Vegan",
    "Vegetarian",
    "Peanut allergies",
    <input placeholder="Other..." />,
  ];

  const whereOptions = [
    "Friends/Family",
    "LinkedIn",
    "Instagram",
    "Twitter",
    "Facebook",
    <input placeholder="Other..." />,
  ];
  const agreeOptions = ["Yes", "No"];

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
              {...register("firstName", {
                required: true,
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert">This field is required</p>
            )}
          </div>

          <div className="w-1/2 flex-col">
            <div className="relative font-bold">Last Name *</div>
            <input
              className="bg-transparent h-10 w-full rounded shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("lastName", {
                required: true,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (
              <p role="alert">This field is required</p>
            )}
          </div>
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">Email *</div>
          <input
            className="bg-transparent h-10 w-full rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
            {...register("email", {
              required: true,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p role="alert">This field is required</p>
          )}
        </div>

        <div className="flex-col gap-28 py-20 px-40  text-xl">
          <div className="font-bold">Phone Number *</div>
          <input
            className="bg-transparent h-10 w-full rounded shadow"
            type="text"
            placeholder=" Type your answer here..."
            {...register("phoneNumber", {
              required: true,
            })}
            aria-invalid={errors.phoneNumber ? "true" : "false"}
          />
          {errors.phoneNumber?.type === "required" && (
            <p role="alert">This field is required</p>
          )}
        </div>

        <div className="flex-col gap-28 py-20 px-40 text-xl">
          <div className="font-bold">Age *</div>
          <Dropdown
            options={ageOptions}
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
            options={dietOptions}
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
            options={whereOptions}
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

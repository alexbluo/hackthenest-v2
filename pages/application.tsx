import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import * as z from "zod";

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

interface Option {
  value: string;
  label: string;
}

const schema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
  phoneNumber: z.string().min(1, { message: "This field is required" }),
  accept: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the MLH code of conduct" }),
  }),
  conduct: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the MLH terms and conditions",
    }),
  }),
});

const Application = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const ageOptions: Option[] = [
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
  ];

  const dietOptions: Option[] = [
    { value: "Vegan", label: "Vegan" },
    { value: "Vegetarian", label: "Vegetarian" },
    { value: "Peanut allergies", label: "Peanut allergies" },
    // <input placeholder="Other..." />,
  ];

  const outreachOptions: Option[] = [
    { value: "Friends/Family", label: "Friends/Family" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Instagram", label: "Instagram" },
    { value: "Twitter", label: "Twitter" },
    { value: "Facebook", label: "Facebook" },
  ];

  const onSubmit = (data) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <section className="h-[100rem]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-12">
          <div className="flex gap-28 px-40 text-xl">
            <div className="w-1/2 flex-col">
              <div className="relative font-bold">First Name *</div>

              <input
                className="bg-transparent h-10 w-full rounded p-4 shadow"
                type="text"
                placeholder=" Type your answer here..."
                {...register("firstName")}
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div className="w-1/2 flex-col">
              <div className="relative font-bold">Last Name *</div>
              <input
                className="bg-transparent h-10 w-full rounded p-4 shadow"
                type="text"
                placeholder=" Type your answer here..."
                {...register("lastName")}
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
            <div className="font-bold">Email *</div>
            <input
              className="bg-transparent h-10 w-full rounded p-4 shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="flex-col gap-28 px-40  text-xl">
            <div className="font-bold">Phone Number *</div>
            <input
              className="bg-transparent h-10 w-full rounded p-4 shadow"
              type="text"
              placeholder=" Type your answer here..."
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
            <div className="font-bold">Age *</div>
            <Select options={ageOptions} className="w-1/3 rounded" />
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
            <div className="relative font-bold">Dietary restrictions</div>
            <Controller
              control={control}
              defaultValue="Select an option..."
              name="dietField"
              render={({ field: { onChange, value, ref } }) => (
                <Select
                  ref={ref}
                  options={dietOptions}
                  placeholder="Select an option..."
                  className="w-1/3 rounded"
                  value={dietOptions.find((el) => el.value === value)}
                  onChange={(newValue) => onChange(newValue.value)}
                />
              )}
            />
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
            <div className="font-bold">Referral Code</div>
            <input
              className="bg-transparent h-10 w-1/2 rounded shadow"
              type="text"
              placeholder=" Type your answer here..."
            />
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
            <div className="font-bold">Where did you hear about us?</div>
            <Select
              options={outreachOptions}
              placeholder="Select an option..."
              className="w-1/3 rounded"
            />
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
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
            <input
              placeholder="Select an option..."
              className="h-6 w-6 rounded"
              type="checkbox"
              {...register("conduct")}
            />
            {errors.conduct && <p>{errors.conduct.message}</p>}
          </div>

          <div className="flex-col gap-28 px-40 text-xl">
            <div className="font-bold">
              I authorize you to share my application/registration information
              with Major League Hacking for event administration, ranking, and
              MLH administration in-line with the&nbsp;
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
            <input
              placeholder="Select an option..."
              className="h-6 w-6 rounded"
              type="checkbox"
              {...register("accept")}
            />
            {errors.accept && <p>{errors.accept.message}</p>}
          </div>

          <div className="gap-28 px-40">
            <button
              className="rounded-lg border px-12 py-4 hover:bg-orange"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Application;

/* eslint-disable import/no-cycle */
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import RegistrationDropdown from "../components/RegistrationDropdown";
import RegistrationInput from "../components/RegistrationInput";

// add school field
// types - esp on data in onsubmit function
// validation:
// - email, phone number, school, etc.
// pt 2: backend
// async save

const schema = z.object({
  firstName: z.string().min(1, { message: "This field is required" }),
  lastName: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
  phoneNumber: z.string().min(1, { message: "This field is required" }),
  age: z.string().min(1),
  diet: z.string().min(1),
  outreach: z.string().min(1),
  conduct: z.literal(true),
  privacy: z.literal(true),
});

export type SchemaType = z.infer<typeof schema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    console.log(data);
    router.push("/dashboard");
  };

  return (
    <div className="bg-black text-white">
      <section className="min-h-screen pt-32">
        <nav className="bg-transparent container absolute top-0 left-0 right-0 z-50 flex h-32 w-full items-center justify-between">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </Link>
        </nav>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-12">
            <div className="flex gap-16">
              <RegistrationInput
                fieldName="First Name"
                name="firstName"
                placeholder="Bumble"
                register={register}
                error={errors}
              />
              <RegistrationInput
                fieldName="Last Name"
                name="lastName"
                placeholder="Bee"
                register={register}
                error={errors}
              />
            </div>

            <RegistrationInput
              fieldName="Email"
              name="email"
              placeholder="bumble@bee.com"
              register={register}
              error={errors}
            />
            <RegistrationInput
              fieldName="Phone Number"
              name="phoneNumber"
              placeholder="000-000-0000"
              register={register}
              error={errors}
            />
            <RegistrationDropdown
              fieldName="Age"
              name="age"
              options={[
                { value: "13", label: "13" },
                { value: "14", label: "14" },
                { value: "15", label: "15" },
                { value: "16", label: "16" },
                { value: "17", label: "17" },
                { value: "18", label: "18" },
              ]}
              defaultValue={undefined}
              control={control}
            />
            <RegistrationDropdown
              fieldName="Dietary Restrictions"
              name="diet"
              options={[
                { value: undefined, label: "None" },
                { value: "vegan", label: "Vegan" },
                { value: "vegetarian", label: "Vegetarian" },
                { value: "kosher", label: "Kosher" },
                { value: "halal", label: "Halal" },
                { value: "glutenFree", label: "Gluten-free" },
                { value: "other", label: "Other" },
              ]}
              defaultValue={undefined}
              control={control}
            />
            <RegistrationDropdown
              fieldName="How did you hear about us?"
              name="outreach"
              options={[
                { value: "friendsFamily", label: "Friends/Family" },
                { value: "socialMedia", label: "Social Media" },
                { value: "teacher", label: "Teacher" },
                { value: "other", label: "Other" },
              ]}
              defaultValue={undefined}
              control={control}
            />
            {/* TODO: display referral input if where === friends */}
            <div>
              <p>Referral Code</p>
              <input
                className="bg-transparent h-10 w-full border-b-2 border-grey bg-black shadow duration-200 ease-in-out focus:border-blue-light"
                type="text"
                placeholder="Type your answer here..."
              />
            </div>
            <div>
              <p>
                I have read and agree to the&nbsp;
                <a
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  MLH Code of Conduct
                </a>
              </p>
              <input
                placeholder="Select an option..."
                className="h-6 w-6 rounded"
                type="checkbox"
                {...register("conduct")}
              />
            </div>
            <div>
              <p>
                I authorize you to share my application/registration information
                with Major League Hacking for event administration, ranking, and
                MLH administration in-line with the&nbsp;
                <a
                  href="https://mlh.io/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
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
                &nbsp;and the MLH Privacy Policy.
              </p>
              <input
                className="h-6 w-6 rounded"
                type="checkbox"
                {...register("privacy")}
              />
              {/* {errors.privacy && <p>{errors.privacy.message}</p>} */}
            </div>
            <button className="rounded-lg border px-12 py-4 hover:bg-gold">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Registration;
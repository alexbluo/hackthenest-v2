/* eslint-disable import/no-cycle */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { authOptions } from "./api/auth/[...nextauth]";
import ApplicationDropdown from "../components/ApplicationDropdown";
import ApplicationInput from "../components/ApplicationInput";
import countries from "../utils/countries";
import useGradient from "../utils/useGradient";

const schema = z.object({
  firstName: z.string().min(1, { message: "*" }),
  lastName: z.string().min(1, { message: "*" }),
  phone: z
    .string()
    .min(1, { message: "*" })
    .regex(
      /^((\\([0-9]{3}\\)[ \\-]*)|([0-9]{3})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{4}?$/,
      { message: "Invalid format" }
    ),
  age: z.number().min(1, { message: "*" }),
  yog: z.number().min(1, { message: "*" }),
  school: z.string().min(1, { message: "*" }),
  country: z.string().min(1, { message: "*" }),
  diet: z.string().array().nonempty({ message: "*" }),
  shirt: z.string().min(1, { message: "*" }),
  outreach: z.string().min(1, { message: "*" }),
  conduct: z.literal(true),
  privacy: z.literal(true),
});

export type SchemaType = z.infer<typeof schema>;

const Application = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
        <nav className="container absolute top-0 left-0 right-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </Link>

          <Link
            className="font-header text-lg font-medium text-gold"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>

        <h2 className={`${useGradient()} mb-8`}>Application</h2>

        <form className="text-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12 sm:flex-row">
              <ApplicationInput
                fieldName="First Name"
                name="firstName"
                placeholder="Bumble"
                register={register}
                error={errors.firstName}
              />
              <ApplicationInput
                fieldName="Last Name"
                name="lastName"
                placeholder="Bee"
                register={register}
                error={errors.lastName}
              />
            </div>
            <ApplicationInput
              fieldName="Phone Number"
              name="phone"
              placeholder="123-456-7890"
              register={register}
              error={errors.phone}
            />
            <ApplicationInput
              fieldName="School"
              name="school"
              placeholder="Barry Benson High School"
              register={register}
              error={errors.school}
            />
            <ApplicationDropdown
              fieldName="Age"
              name="age"
              options={[
                { value: 13, label: "13" },
                { value: 14, label: "14" },
                { value: 15, label: "15" },
                { value: 16, label: "16" },
                { value: 17, label: "17" },
                { value: 18, label: "18" },
              ]}
              defaultValue={undefined}
              control={control}
              error={errors.age}
            />
            <ApplicationDropdown
              fieldName="Year of Graduation"
              name="yog"
              options={[
                { value: 2023, label: "2023" },
                { value: 2024, label: "2024" },
                { value: 2025, label: "2025" },
                { value: 2026, label: "2026" },
              ]}
              defaultValue={undefined}
              control={control}
              error={errors.yog}
            />
            <ApplicationDropdown
              fieldName="Country of Residence"
              name="country"
              options={countries}
              defaultValue={undefined}
              control={control}
              error={errors.country}
            />
            <ApplicationDropdown
              fieldName="Dietary Restrictions"
              name="diet"
              options={[
                { value: null, label: "None" },
                { value: "vegan", label: "Vegan" },
                { value: "vegetarian", label: "Vegetarian" },
                { value: "kosher", label: "Kosher" },
                { value: "halal", label: "Halal" },
                { value: "glutenFree", label: "Gluten-free" },
                { value: "dairyFree", label: "Dairy-free" },
                { value: "nutAllergy", label: "Nut Allergy" },
                { value: "other", label: "Other" },
              ]}
              defaultValue={undefined}
              control={control}
              isMulti
              error={errors.diet}
            />
            <ApplicationDropdown
              fieldName="Shirt Size"
              name="shirt"
              options={[
                { value: "XS", label: "XS" },
                { value: "SM", label: "SM" },
                { value: "MD", label: "MD" },
                { value: "LG", label: "LG" },
                { value: "XL", label: "XL" },
              ]}
              defaultValue={undefined}
              control={control}
              error={errors.shirt}
            />
            <ApplicationDropdown
              fieldName="How did you hear about us?"
              name="outreach"
              options={[
                { value: "friendFamily", label: "Friend/Family" },
                { value: "flyer", label: "Flyer" },
                { value: "instagram", label: "Instagram" },
                { value: "facebook", label: "Facebook" },
                { value: "twitter", label: "Twitter" },
                { value: "linkedin", label: "LinkedIn" },
                { value: "internetSearch", label: "Internet Search" },
                { value: "mlh", label: "MLH" },
                { value: "hackClub", label: "Hack Club" },
                { value: "other", label: "Other" },
              ]}
              defaultValue={undefined}
              control={control}
              error={errors.outreach}
            />
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <input
                  className="h-4 w-4 appearance-none rounded-sm bg-white checked:bg-blue-light"
                  type="checkbox"
                  {...register("conduct")}
                />
                <span className="w-full">
                  I have read and agree to the{" "}
                  <a
                    className="underline"
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MLH Code of Conduct
                  </a>{" "}
                  {errors.conduct && <span className="text-red">*</span>}
                </span>
              </div>
              <div className="flex w-full items-center gap-4">
                <input
                  className="h-4 w-4 appearance-none rounded-sm bg-white checked:bg-blue-light"
                  type="checkbox"
                  {...register("privacy")}
                />
                <span className="w-full">
                  I authorize you to share my application/registration
                  information with Major League Hacking for event
                  administration, ranking, and MLH administration in-line with
                  the MLH Privacy Policy. I further agree to the terms of both
                  the{" "}
                  <a
                    className="underline"
                    href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MLH Contest Terms and Conditions
                  </a>{" "}
                  and the{" "}
                  <a
                    className="underline"
                    href="https://mlh.io/privacy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MLH Privacy Policy
                  </a>{" "}
                  {errors.privacy && <span className="text-red">*</span>}
                </span>
              </div>
            </div>
            <button
              className={`${useGradient()} mx-auto h-fit w-full self-end rounded-md bg-white px-6 py-4 text-center text-lg font-medium text-black`}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { data } = await axios.get(
    `http://localhost:3000/api/user/${session.user?.email}`
  );

  return {
    props: { user: data },
  };
};

export default Application;

/* eslint-disable import/no-cycle */
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import ApplicationDropdown from "../../components/ApplicationDropdown";
import ApplicationInput from "../../components/ApplicationInput";
import base from "../../utils/base";
import countries from "../../utils/countries";
import useGradient from "../../utils/useGradient";
import { authOptions } from "../api/auth/[...nextauth]";

const schema = z.object({
  firstName: z.string().min(1, { message: "*" }).optional(),
  lastName: z.string().min(1, { message: "*" }).optional(),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "*" })
    .optional(),
  age: z.number().min(1, { message: "*" }).optional(),
  yog: z.number().min(1, { message: "*" }).optional(),
  // check capitalized
  school: z.string().min(1, { message: "*" }).optional(),
  country: z.string().min(1, { message: "*" }).optional(),
  diet: z.string().min(1, { message: "*" }).optional(),
  shirt: z.string().min(1, { message: "*" }).optional(),
  experience: z.number().min(1, { message: "*" }).optional(),
  outreach: z.string().min(1, { message: "*" }).optional(),
  conduct: z.literal(true).optional(),
  privacy: z.literal(true).optional(),
});

export type SchemaType = z.infer<typeof schema>;

const HackerApp = ({
  app,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    control,
    getValues,
    reset,
    setFocus,
  } = useForm<SchemaType>({
    defaultValues: app,
    resolver: zodResolver(schema),
    shouldFocusError: false,
  });

  const router = useRouter();

  useEffect(() => {
    try {
      const existentValues = Object.fromEntries(
        Object.entries(getValues()).filter(([k, v]) => !!v && v !== "")
      );
      schema.parse(existentValues);
    } catch (err) {
      return () => null;
    }
    if (!isDirty) return () => null;

    const interval = setTimeout(async () => {
      await axios.post("/api/app/hacker/save", { data: getValues() });
      reset({}, { keepValues: true });
    }, 2000);

    return () => clearTimeout(interval);
  }, [getValues, isDirty, reset]);

  // set focus to top-most error field on submission
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstError = Object.keys(errors)[0] as keyof SchemaType;
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const res = await axios.post("/api/app/hacker/submit", { data });

    router.push("/dashboard");
  };

  return (
    <div className="bg-black text-white">
      <section className="min-h-screen pt-32">
        <nav className="container absolute left-0 right-0 top-0 z-50 flex h-32 w-full items-center justify-between bg-transparent">
          <Link className="relative z-50 aspect-square h-3/5" href="/">
            <Image
              src="/logo-colored.png"
              alt="Hack the Nest Logo"
              sizes="76.8px"
              fill
            />
          </Link>

          <Link
            className="font-mono text-lg font-medium text-gold"
            href="/dashboard"
          >
            dashboard
          </Link>
        </nav>

        <h2 className="text-gradient mb-8">application</h2>

        <form
          className="-mx-8 rounded-3xl bg-blue-mid/20 p-8 text-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12 sm:flex-row">
              <ApplicationInput
                fieldName="first name"
                name="firstName"
                placeholder="Bumble"
                register={register}
                error={errors.firstName}
              />
              <ApplicationInput
                fieldName="last name"
                name="lastName"
                placeholder="Bee"
                register={register}
                error={errors.lastName}
              />
            </div>
            <ApplicationInput
              fieldName="phone number"
              name="phone"
              placeholder="1234567890"
              register={register}
              error={errors.phone}
            />
            <ApplicationInput
              fieldName="school"
              name="school"
              placeholder="Barry Benson High School"
              register={register}
              error={errors.school}
            />
            <ApplicationDropdown
              fieldName="age"
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
              fieldName="year of graduation"
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
              fieldName="country of residence"
              name="country"
              options={countries}
              defaultValue={undefined}
              control={control}
              error={errors.country}
            />
            <ApplicationDropdown
              fieldName="dietary restrictions"
              name="diet"
              options={[
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
              error={errors.diet}
            />
            <ApplicationDropdown
              fieldName="shirt size"
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
              fieldName="how many hackathons have you been to?"
              name="experience"
              options={[
                { value: 0, label: "This is my first one!" },
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4+" },
              ]}
              defaultValue={undefined}
              control={control}
              error={errors.shirt}
            />
            <ApplicationDropdown
              fieldName="how did you hear about us?"
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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 leading-none">
                <input
                  className="h-4 w-4 cursor-pointer appearance-none rounded-sm bg-white checked:bg-blue-light"
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
              <div className="flex w-full gap-4 leading-none">
                <input
                  className="h-4 w-4 cursor-pointer appearance-none rounded-sm bg-white checked:bg-blue-light"
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

  if (session?.user?.name === "ADMIN") {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  const { data: app } = await axios.get<SchemaType>(`${base}/api/app/hacker`, {
    headers: {
      cookie: context.req.headers.cookie || "",
    },
  });

  return {
    props: { app },
  };
};

export default HackerApp;

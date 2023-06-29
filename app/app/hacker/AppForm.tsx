"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { HackerApp } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import countries from "utils/countries";
import ApplicationDropdown from "../ApplicationDropdown";
import ApplicationInput from "../ApplicationInput";

// min in case delete to empty string
const schema = z.object({
  firstName: z.string().min(1, { message: "*" }),
  lastName: z.string().min(1, { message: "*" }),
  phone: z
    .string()
    .min(1, { message: "*" })
    .regex(/^\d{10}$/, { message: "* please check formatting" }),
  age: z.number(),
  yog: z.number(),
  school: z
    .string()
    .min(1, { message: "*" })
    .refine(
      (val) =>
        val
          .trim()
          .split(" ")
          .every((word) => word.match(/^[A-Z].*$/)),
      { message: "* please capitalize each word" }
    )
    .optional(),
  country: z.string(),
  diet: z.string(),
  shirt: z.string(),
  experience: z.number(),
  outreach: z.string(),
  conduct: z.literal(true),
  privacy: z.literal(true),
});

interface Props {
  app?: HackerApp;
}

// TODO: jumbo on focus??
const AppForm = ({ app }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    control,
    getValues,
    reset,
    setFocus,
  } = useForm<HackerApp>({
    defaultValues: app,
    resolver: zodResolver(schema),
    shouldFocusError: false,
  });

  const router = useRouter();

  useEffect(() => {
    const existentValues = Object.fromEntries(
      Object.entries(getValues()).filter(([k, v]) => !!v && v !== "")
    );
    schema.safeParse(existentValues);

    if (!isDirty) return () => null;

    const interval = setTimeout(async () => {
      await fetch("/api/app/hacker/save", {
        method: "POST",
        body: JSON.stringify(getValues()),
      });
      reset({}, { keepValues: true });
    }, 2000);

    return () => clearTimeout(interval);
  }, [getValues, isDirty, reset]);

  // set focus to top-most error field on submission
  useEffect(() => {
    console.log(errors);
    console.log(getValues());
    if (Object.keys(errors).length > 0) {
      const firstError = Object.keys(errors)[0] as keyof HackerApp;
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  const onSubmit: SubmitHandler<HackerApp> = async (data) => {
    await fetch("/api/app/hacker/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/dashboard?confirm=hackerapp");
  };

  return (
    <form
      className="-mx-8 rounded-3xl bg-blue-mid/20 p-8 text-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          placeholder="1234567890"
          maxLength={10}
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
            { value: "None", label: "None" },
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
          fieldName="How many hackathons have you been to?"
          name="experience"
          options={[
            { value: 0, label: "This is my first one :D" },
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
              I authorize you to share my application/registration information
              with Major League Hacking for event administration, ranking, and
              MLH administration in-line with the MLH Privacy Policy. I further
              agree to the terms of both the{" "}
              <a
                className="underline"
                href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                target="_blank"
                aria-label="MLH Contest Terms and Conditions"
                rel="noreferrer"
              >
                MLH Contest Terms and Conditions
              </a>{" "}
              and the{" "}
              <a
                className="underline"
                href="https://mlh.io/privacy"
                target="_blank"
                aria-label="MLH Privacy Policy"
                rel="noreferrer"
              >
                MLH Privacy Policy
              </a>{" "}
              {errors.privacy && <span className="text-red">*</span>}
            </span>
          </div>
        </div>
        <button className="gradient-bg mx-auto h-fit w-full self-end rounded-md bg-white px-6 py-4 text-center text-lg font-medium text-black">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AppForm;

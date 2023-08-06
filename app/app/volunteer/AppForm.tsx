"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { VolunteerApp } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
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
  affiliation: z.string(),
  role: z.string(),
  diet: z.string(),
  shirt: z.string(),
});

interface Props {
  app?: VolunteerApp;
}

const AppForm = ({ app }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    control,
    getValues,
    reset,
    setFocus,
  } = useForm<VolunteerApp>({
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
      await fetch("/api/app/volunteer/save", {
        method: "POST",
        body: JSON.stringify(getValues()),
      });
      reset({}, { keepValues: true });
    }, 2000);

    return () => clearTimeout(interval);
  }, [getValues, isDirty, reset]);

  // set focus to top-most error field on submission
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstError = Object.keys(errors)[0] as keyof VolunteerApp;
      setFocus(firstError);
    }
  }, [errors, setFocus]);

  const onSubmit: SubmitHandler<VolunteerApp> = async (data) => {
    await fetch("/api/app/volunteer/submit", {
      method: "POST",
      body: JSON.stringify(data),
    });

    router.push("/dashboard?confirm=volunteerapp");
  };

  return (
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
          fieldName="phone"
          name="phone"
          placeholder="1234567890"
          maxLength={10}
          register={register}
          error={errors.phone}
        />
        <ApplicationInput
          fieldName="affiliation (school, company, etc.)"
          name="affiliation"
          placeholder="Teacher at Barry Benson High School"
          register={register}
          error={errors.affiliation}
        />
        <ApplicationDropdown
          fieldName="role"
          name="role"
          options={[
            { value: "volunteer", label: "Volunteer" },
            { value: "mentor", label: "Mentor" },
            { value: "judge", label: "Judge" },
            { value: "sponsor", label: "Sponsor" },
          ]}
          control={control}
          error={errors.role}
        />
        <ApplicationDropdown
          fieldName="dietary restrictions"
          name="diet"
          options={[
            { value: "none", label: "None" },
            { value: "vegan", label: "Vegan" },
            { value: "vegetarian", label: "Vegetarian" },
            { value: "kosher", label: "Kosher" },
            { value: "halal", label: "Halal" },
            { value: "glutenFree", label: "Gluten-free" },
            { value: "dairyFree", label: "Dairy-free" },
            { value: "nutAllergy", label: "Nut Allergy" },
            { value: "other", label: "Other" },
          ]}
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
          control={control}
          error={errors.shirt}
        />
        <button className="gradient-bg mx-auto h-fit w-full self-end rounded-md bg-white px-6 py-4 text-center text-lg font-medium text-black">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AppForm;

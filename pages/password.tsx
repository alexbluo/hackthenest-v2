import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    password: z.string().min(8, { message: "minimum 8 characters" }),
    confirmPassword: z.string().optional(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword && password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

type SchemaType = z.infer<typeof schema>;

const Password = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const [loginState, setLoginState] = useState<
    "initial" | "loggingIn" | "creatingPassword"
  >("initial");

  const onSubmit: SubmitHandler<SchemaType> = async ({ email, password }) => {
    console.log("hi");
    if (loginState === "initial") {
      const {
        data: { userExists, passwordExists },
      } = await axios.get(`/api/user/exists`, {
        params: {
          email,
        },
      });

      if (!userExists) {
        setLoginState("creatingPassword");
      } else {
        setLoginState("loggingIn");
      }
    } else if (loginState === "loggingIn") {
      signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
    } else if (loginState === "creatingPassword") {
      await axios.post("/api/user/upsert", {
        email,
        password,
      });
    }
  };

  return (
    // status: setting password for {email}
    <div className="w-screen bg-black">
      <div className="mx-auto flex min-h-screen w-80 flex-col items-center justify-center gap-4 py-16">
        <div className="relative z-50 mx-auto aspect-square w-1/2">
          <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
        </div>
        <h1 className="text-5xl font-black text-gold">Hack the Nest</h1>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-full rounded-md border bg-white px-6 py-4 text-black placeholder:text-black"
            type="email"
            placeholder="password"
            {...register("password")}
          />
          <input
            className="w-full rounded-md border bg-white px-6 py-4 text-black placeholder:text-black"
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          <button className="flex w-full items-center justify-between rounded-md border bg-gold px-6 py-4">
            <p>Continue</p>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;

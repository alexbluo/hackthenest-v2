import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
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
  );
};

export default Login;

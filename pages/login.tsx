import { useState, ChangeEvent } from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

interface Credentials {
  username: string;
  password: string;
}

const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, username: e.target.value });
  };

  return (
    <div className="w-screen bg-black">
      <div className="mx-auto flex min-h-screen w-80 flex-col items-center justify-center gap-4 py-16">
        <div className="relative z-50 mx-auto aspect-square w-1/2">
          <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
        </div>
        <h1 className="text-5xl font-black text-gold">
          Hack the Nest
        </h1>
        <input
          className="w-full rounded-md border bg-white py-4 px-6 text-black placeholder:text-black"
          name="username"
          onChange={handleChange}
          type="text"
          placeholder="bumble@bee.com"
        />

        <button
          className="flex w-full items-center justify-between rounded-md border bg-gold px-6 py-4"
          onClick={() =>
            signIn("credentials", { ...credentials, callbackUrl: "/dashboard" })
          }
        >
          <p>Continue</p>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>

        <div className="flex w-full items-center gap-2">
          <div className="h-fit w-full border border-grey" />
          <p className="text-white">or</p>
          <div className="h-fit w-full border border-grey" />
        </div>

        <button
          className="flex w-full items-center justify-between rounded-md border bg-blue-light px-6 py-4"
          onClick={() =>
            signIn(providers?.google.id, { callbackUrl: "/dashboard" })
          }
        >
          <p>Continue with Google</p>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </button>
        <button
          className="flex w-full items-center justify-between rounded-md border bg-blue-light px-6 py-4"
          onClick={() =>
            signIn(providers?.github.id, { callbackUrl: "/dashboard" })
          }
        >
          <p>Continue with GitHub</p>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const providers = await getProviders();
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
};

export default Login;

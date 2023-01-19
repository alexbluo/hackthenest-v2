import { InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

// TODO: link to login and redirect to dashboard if signed in
const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="mx-auto flex h-screen w-80 flex-col items-center justify-center gap-4">
      <div className="relative z-50 mx-auto aspect-square h-40">
        <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
      </div>
      <h1 className="font-header text-5xl font-black">Hack the Nest</h1>
      <input
        className="w-full rounded-md border py-4 px-6"
        // onChange={() => signIn()}
        type="text"
        placeholder="username"
      />
      <button
        className="flex w-full justify-between rounded-md border px-6 py-4"
        onClick={() => signIn("credentials", {})}
      >
        <p>Sign in</p>
        <div className="relative aspect-square h-full">
          <Image src="/arrow-right.svg" alt="Sign in arrow" fill />
        </div>
      </button>
      <div className="flex w-full items-center gap-2">
        <div className="h-fit w-full border" />
        <p>or</p>
        <div className="h-fit w-full border" />
      </div>
      <button
        className="flex w-full justify-between rounded-md border px-6 py-4"
        onClick={() =>
          signIn(providers?.google.id, { callbackUrl: "/dashboard" })
        }
      >
        <p>Sign in with Google</p>
        <div className="relative aspect-square h-full">
          <Image src="/google.svg" alt="Google icon" fill />
        </div>
      </button>
      <button
        className="flex w-full justify-between rounded-md border px-6 py-4"
        onClick={() =>
          signIn(providers?.github.id, { callbackUrl: "/dashboard" })
        }
      >
        <p>Sign in with GitHub</p>
        <div className="relative aspect-square h-full">
          <Image src="/github.svg" alt="GitHub icon" fill />
        </div>
      </button>
    </div>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

export default Login;

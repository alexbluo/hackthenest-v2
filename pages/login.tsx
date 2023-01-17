import { sign } from "crypto";
import { InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import { userInfo } from "os";

// add github and custom email/username pass
const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="text-center">
          <div className="relative z-50 mx-auto aspect-square h-24">
            <Image src="/logo-colored.png" alt="Hack the Nest Logo" fill />
          </div>
          <input
            onChange={() => signIn()}
            type="text"
            placeholder="email"
          />
          <div>
            <button onClick={() => signIn()}>sign in</button>
          </div>
        </div>
      </div>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/dashboard" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

export default Login;

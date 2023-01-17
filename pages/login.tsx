import { InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react";

// add github and custom email/username pass
const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
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

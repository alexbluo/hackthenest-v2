import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return <button onClick={() => signIn()}>Sign in</button>;
};
export default Login;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
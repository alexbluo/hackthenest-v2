import NextAuth from "next-auth";
import { providers, signIn } from "next-auth/client";

const logIn = () => {
  return <button onClick={() => signIn()}>
    Sign in
    </button>;
};
export default logIn;

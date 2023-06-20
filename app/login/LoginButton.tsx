"use client";

import { ReactNode } from "react";
import { BuiltInProviderType } from "next-auth/providers";
import { LiteralUnion, signIn } from "next-auth/react";

interface Props {
  provider: LiteralUnion<BuiltInProviderType, string> | undefined;
  prompt: string;
  children: ReactNode;
}

const LoginButton = ({ provider, prompt, children }: Props) => {
  return (
    <button
      className="flex w-full items-center justify-between rounded-md border bg-blue-light px-6 py-4"
      onClick={() => signIn(provider, { callbackUrl: "/dashboard" })}
    >
      <span>{prompt}</span>
      {children}
    </button>
  );
};

export default LoginButton
"use client"

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const AdminLogin = () => {
  const [password, setPassword] = useState<string>("");
  const [incorrect, setIncorrect] = useState<boolean>(false);

  const router = useRouter();

  return (
    <div className="w-screen bg-black">
      <div className="mx-auto flex min-h-screen w-80 flex-col items-center justify-center gap-4 py-16">
        <div className="relative mx-auto aspect-square w-1/2">
          <Image
            src="/logo-colored.png"
            alt="Hack the Nest Logo"
            sizes="160px"
            fill
            priority
          />
        </div>
        <h1 className="font-mono text-5xl font-extrabold text-gold">
          Admin Login
        </h1>
        <form
          className="flex w-full flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();

            signIn("credentials", {
              username: "ADMIN",
              password,
              redirect: false,
            }).then((res) => {
              if (res?.error) {
                setPassword("");
                setIncorrect(true);
              } else {
                router.replace("/admin");
              }
            });
          }}
        >
          <input
            className="w-full rounded-md border bg-white px-6 py-4 text-black placeholder:text-black"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
        {incorrect && (
          <div className="w-full rounded-md bg-white">
            <div className="rounded-md bg-red/70 px-6 py-2">
              Incorrect password.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin
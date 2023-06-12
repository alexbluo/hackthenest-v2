"use client"

import { useEffect } from "react";
import { useRouter } from "next/router";

const Error404 = () => {
  const router = useRouter();

  // redirect nonexistent pages to the root
  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default Error404;

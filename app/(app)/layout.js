"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const isAuthenticated = true;
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);

  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated, isLoading, router]);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return <div>{isAuthenticated ? children : null}</div>;
}

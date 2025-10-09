"use client";

import { useEffect, useState } from "react";
import { Loader } from "@/components/loader";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate page load completion
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return <Loader isLoading={isLoading} />;
}
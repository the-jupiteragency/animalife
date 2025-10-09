"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoaderProps {
  onComplete?: () => void;
  isLoading?: boolean;
}

export function Loader({ onComplete, isLoading = true }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      setTimeout(() => onComplete?.(), 300);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0; // Loop back to 0
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#F9F4DF] flex flex-col items-center justify-center z-50">
      <div className="relative w-80 h-80 mb-12">
        {/* Empty SVG (background) */}
        <div className="absolute inset-0">
          <Image
            src="/loading/empty.png"
            alt="Loading"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Wave animation container */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0)`,
          }}
        >
          {/* Full SVG (liquid fill) */}
          <div className="absolute inset-0">
            <Image
              src="/loading/full.png"
              alt="Loading"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#2d5a3d] mb-6 tracking-wide">
          Loading{dots}
        </h2>
      </div>
    </div>
  );
}

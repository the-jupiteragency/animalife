"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import BackgroundVideo from "next-video/background-video";

// Import single combined video
import dogsVideo from "@/videos/dogs.mp4";

const textSlides = [
  { start: 0, end: 5, heading: "Because Every Bond Deserves the Best" },
  { start: 5, end: 10, heading: "Care You Give.\nScience We Perfect" },
  { start: 10, end: 14, heading: "Energy You Can See" },
  { start: 14, end: 19, heading: "Because Every Moment is Everything" },
];

export function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle time updates to sync text with video
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const newTextIndex = textSlides.findIndex(
      (slide) => currentTime >= slide.start && currentTime < slide.end
    );

    if (newTextIndex !== -1 && newTextIndex !== currentTextIndex) {
      setCurrentTextIndex(newTextIndex);
    }
  };

  // Ensure video plays on mount
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
          }
        });
      }
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      <BackgroundVideo
        ref={videoRef}
        src={dogsVideo}
        onTimeUpdate={handleTimeUpdate}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`heading-${currentTextIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line"
              >
                {textSlides[currentTextIndex].heading}
              </motion.h1>
            </AnimatePresence>

            <div className="mt-12">
              <Link
                href="/products"
                className="inline-flex items-center justify-center font-bold rounded-full px-8 py-4 text-lg shadow-lg gap-2 transform transition-all hover:scale-105 bg-white text-[#13513D] hover:bg-[#F9F4DF]"
              >
                View Products
                <IoIosArrowDropright className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </BackgroundVideo>
    </section>
  );
}

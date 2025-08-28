"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import BackgroundVideo from "next-video/background-video";

// Import videos directly
import video1 from "@/videos/1.1.mp4";
import video2 from "@/videos/2.2.mp4";
import video3 from "@/videos/3.2.mp4";
import video4 from "@/videos/4.1.mp4";

const heroSlides = [
  {
    video: video1,
    heading: "Because Every Bond Deserves the Best",
  },
  {
    video: video2,
    heading: "Care You Give. Science We Perfect",
  },
  {
    video: video3,
    heading: "Energy You Can See",
  },
  {
    video: video4,
    heading: "Because Every Moment is Everything",
  },
];

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null);
  const touchStartRef = useRef<number>(0);

  // Handle video end to transition to next slide
  const handleVideoEnd = useCallback(() => {
    setIsTransitioning(true);
    setNextSlideIndex((currentSlideIndex + 1) % heroSlides.length);
    setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
      setNextSlideIndex(null);
    }, 400); // quick fade duration
  }, [currentSlideIndex]);

  // Handle manual slide change
  const handleSlideChange = useCallback(
    (index: number) => {
      if (index === currentSlideIndex) return;
      setIsTransitioning(true);
      setNextSlideIndex(index);
      setTimeout(() => {
        setCurrentSlideIndex(index);
        setIsTransitioning(false);
        setNextSlideIndex(null);
      }, 400);
    },
    [currentSlideIndex]
  );

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const touchEnd = e.changedTouches[0].clientX;
      const diff = touchStartRef.current - touchEnd;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleSlideChange((currentSlideIndex + 1) % heroSlides.length);
        } else {
          handleSlideChange(
            (currentSlideIndex - 1 + heroSlides.length) % heroSlides.length
          );
        }
      }
    },
    [currentSlideIndex, handleSlideChange]
  );

  // Fade variants for text
  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Double-layer video for crossfade
  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 w-screen h-screen">
        {/* Current video */}
        <motion.div
          key={`video-${currentSlideIndex}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-screen h-screen"
          style={{ zIndex: 1 }}
        >
          <BackgroundVideo
            src={heroSlides[currentSlideIndex].video}
            className="w-screen h-screen"
            style={{
              filter: "brightness(0.8)",
              objectFit: "cover",
              width: "100vw",
              height: "100vh",
            }}
            onEnded={handleVideoEnd}
            autoPlay
            loop={false}
            muted
          >
            {/* Overlay content will be rendered outside */}
          </BackgroundVideo>
        </motion.div>
        {/* Next video for crossfade */}
        {isTransitioning && nextSlideIndex !== null && (
          <motion.div
            key={`video-next-${nextSlideIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 w-screen h-screen"
            style={{ zIndex: 2 }}
          >
            <BackgroundVideo
              src={heroSlides[nextSlideIndex].video}
              className="w-screen h-screen"
              style={{
                filter: "brightness(0.8)",
                objectFit: "cover",
                width: "100vw",
                height: "100vh",
              }}
              autoPlay
              loop={false}
              muted
            >
              {/* Overlay content will be rendered outside */}
            </BackgroundVideo>
          </motion.div>
        )}
        {/* Content Overlay */}
        <div
          className="relative z-10 h-screen flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${isTransitioning && nextSlideIndex !== null ? nextSlideIndex : currentSlideIndex}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="space-y-8"
              >
                <h1
                  className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
                  style={{ fontFamily: "Poppins" }}
                >
                  {
                    heroSlides[
                      isTransitioning && nextSlideIndex !== null
                        ? nextSlideIndex
                        : currentSlideIndex
                    ].heading
                  }
                </h1>
              </motion.div>
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

        {/* ...no indicators... */}
      </div>
    </section>
  );
}

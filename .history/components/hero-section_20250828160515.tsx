"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import Player from "next-video/player";

// Import video metadata
import video1Data from "@/videos/1.1.mp4.json";
import video2Data from "@/videos/2.2.mp4.json";
import video3Data from "@/videos/3.2.mp4.json";
import video4Data from "@/videos/4.1.mp4.json";

const heroSlides = [
  {
    video: video1Data.sources[0].src,
    poster: video1Data.poster,
    heading: "Because Every Bond Deserves the Best",
  },
  {
    video: video2Data.sources[0].src,
    poster: video2Data.poster,
    heading: "Care You Give. Science We Perfect",
  },
  {
    video: video3Data.sources[0].src,
    poster: video3Data.poster,
    heading: "Energy You Can See",
  },
  {
    video: video4Data.sources[0].src,
    poster: video4Data.poster,
    heading: "Because Every Moment is Everything",
  },
];

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const touchStartRef = useRef<number>(0);

  // Initialize component
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Handle video end to transition to next slide
  const handleVideoEnd = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // Handle manual slide change
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlideIndex(index);
  }, []);

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

  const currentSlide = heroSlides[currentSlideIndex];

  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (!isInitialized) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-[#1B4838]">
        <div className="text-center text-[#F9F4DF]">
          <div className="w-8 h-8 border-2 border-[#F9F4DF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm opacity-75">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-screen h-screen">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={`video-${index}`}
            initial={false}
            animate={{
              opacity: index === currentSlideIndex ? 1 : 0,
              scale: index === currentSlideIndex ? 1 : 1.05,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0 w-screen h-screen"
          >
            <Player
              key={`player-${index}`}
              src={slide.video}
              poster={slide.poster}
              blurDataURL={video1Data.blurDataURL}
              autoPlay={index === currentSlideIndex}
              muted
              playsInline
              controls={false}
              onEnded={handleVideoEnd}
              className="w-screen h-screen"
              style={{
                filter: "brightness(0.7)",
                objectFit: "fill",
                width: "100vw",
                height: "100vh",
                minWidth: "100vw",
                minHeight: "100vh",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content Overlay */}
      <div
        className="relative z-10 h-screen flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlideIndex}`}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
                style={{ fontFamily: "Poppins" }}
              >
                {currentSlide.heading}
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlideIndex
                  ? "bg-white w-8"
                  : "bg-white/40 w-2 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

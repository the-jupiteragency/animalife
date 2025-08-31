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
    heading: "Care You Give.\nScience We Perfect",
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
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  // Handle video end to transition to next slide
  const handleVideoEnd = useCallback(() => {
    const nextIndex = (currentSlideIndex + 1) % heroSlides.length;
    setIsTransitioning(true);
    setNextSlideIndex(nextIndex);

    // Ensure next video is ready to play
    if (nextVideoRef.current) {
      nextVideoRef.current.currentTime = 0;
      const playPromise = nextVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (nextVideoRef.current) {
            nextVideoRef.current.muted = true;
            nextVideoRef.current.play();
          }
        });
      }
    }

    setTimeout(() => {
      setCurrentSlideIndex(nextIndex);
      setIsTransitioning(false);
      setNextSlideIndex(null);
    }, 400);
  }, [currentSlideIndex]);

  // Handle manual slide change
  const handleSlideChange = useCallback(
    (index: number) => {
      if (index === currentSlideIndex || isTransitioning) return;
      setIsTransitioning(true);
      setNextSlideIndex(index);

      // Ensure next video is ready to play
      if (nextVideoRef.current) {
        nextVideoRef.current.currentTime = 0;
        const playPromise = nextVideoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (nextVideoRef.current) {
              nextVideoRef.current.muted = true;
              nextVideoRef.current.play();
            }
          });
        }
      }

      setTimeout(() => {
        setCurrentSlideIndex(index);
        setIsTransitioning(false);
        setNextSlideIndex(null);
      }, 400);
    },
    [currentSlideIndex, isTransitioning]
  );

  // Ensure first video plays on mount
  useEffect(() => {
    if (currentVideoRef.current) {
      currentVideoRef.current.currentTime = 0;
      const playPromise = currentVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (currentVideoRef.current) {
            currentVideoRef.current.muted = true;
            currentVideoRef.current.play();
          }
        });
      }
    }
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

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0">
        {/* Current video */}
        <motion.div
          key={`video-${currentSlideIndex}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <BackgroundVideo
            ref={currentVideoRef}
            src={heroSlides[currentSlideIndex].video}
            onEnded={handleVideoEnd}
            autoPlay
            playsInline
            muted
            loop={false}
            controls={false}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* Next video */}
        {isTransitioning && nextSlideIndex !== null && (
          <motion.div
            key={`video-next-${nextSlideIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <BackgroundVideo
              ref={nextVideoRef}
              src={heroSlides[nextSlideIndex].video}
              autoPlay
              playsInline
              muted
              loop={false}
              controls={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        )}

        {/* Content Overlay */}
        <div
          className="relative z-10 h-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`heading-${currentSlideIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line"
              >
                {heroSlides[currentSlideIndex].heading}
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
      </div>
    </section>
  );
}

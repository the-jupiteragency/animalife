"use client";

import type React from "react";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";

const heroSlides = [
  {
    image: "/hero1.webp",
    heading: "Fuel Their Life With Science & Love.",
    subheading:
      "Crafted to support your pet's unique needs from genetic predispositions to digestive sensitivities and metabolic health for balanced nutrition that truly fits.",
  },
  {
    image: "/hero2.webp",
    heading: "Discover our wide dog range.",
    subheading:
      "Crafted to support your pet's unique needs from genetic predispositions to digestive sensitivities and metabolic health for balanced nutrition that truly fits.",
  },
  {
    image: "/hero3.webp",
    heading: "Whatever the breed, we have it.",
    subheading:
      "Crafted to support your pet's unique needs from genetic predispositions to digestive sensitivities and metabolic health for balanced nutrition that truly fits.",
  },
];

// Check connection speed
const getConnectionSpeed = () => {
  if (typeof navigator !== "undefined" && "connection" in navigator) {
    const connection = (navigator as any).connection;
    return connection?.effectiveType || "unknown";
  }
  return "unknown";
};

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const touchStartRef = useRef<number>(0);

  // Detect slow connection
  useEffect(() => {
    const connectionSpeed = getConnectionSpeed();
    setIsSlowConnection(["slow-2g", "2g"].includes(connectionSpeed));
  }, []);

  // Optimized image preloading with connection awareness
  const preloadImages = useCallback(() => {
    const loadPromises = heroSlides.map((slide, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          resolve();
        };
        img.onerror = () => resolve(); // Continue even if image fails

        // For slow connections, only preload current and next image
        if (isSlowConnection && index > 1) {
          resolve();
          return;
        }

        img.src = slide.image;
      });
    });

    // Load first image immediately, others progressively
    Promise.resolve(loadPromises[0]).then(() => {
      setIsInitialized(true);
      // Load remaining images with delay for slow connections
      if (!isSlowConnection) {
        Promise.all(loadPromises.slice(1));
      } else {
        // Stagger loading for slow connections
        loadPromises.slice(1).forEach((promise, index) => {
          setTimeout(() => promise, (index + 1) * 1000);
        });
      }
    });
  }, [isSlowConnection]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Optimized auto-slide with cleanup
  useEffect(() => {
    if (!isInitialized) return;

    const startAutoSlide = () => {
      intervalRef.current = setInterval(
        () => {
          setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
        },
        isSlowConnection ? 6000 : 4000
      ); // Slower for slow connections
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isInitialized, isSlowConnection]);

  // Handle manual slide change
  const handleSlideChange = useCallback(
    (index: number) => {
      setCurrentSlideIndex(index);
      // Reset auto-slide timer
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(
          () => {
            setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
          },
          isSlowConnection ? 6000 : 4000
        );
      }
    },
    [isSlowConnection]
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
        // Minimum swipe distance
        if (diff > 0) {
          // Swipe left - next slide
          handleSlideChange((currentSlideIndex + 1) % heroSlides.length);
        } else {
          // Swipe right - previous slide
          handleSlideChange(
            (currentSlideIndex - 1 + heroSlides.length) % heroSlides.length
          );
        }
      }
    },
    [currentSlideIndex, handleSlideChange]
  );

  const currentSlide = heroSlides[currentSlideIndex];

  // Reduced motion variants for better performance
  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  if (!isInitialized) {
    return (
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-sec-bg.webp')",
          backgroundColor: "#1B4838",
        }}
      >
        <div className="text-center text-[#F9F4DF]">
          <div className="w-8 h-8 border-2 border-[#F9F4DF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm opacity-75">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-sec-bg.webp')",
        backgroundColor: "#1B4838",
      }}
    >
      {/* Mobile Layout */}
      <div className="block pt-16 lg:hidden">
        <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-8">
            <div
              className="relative w-full max-w-[500px] mx-auto   overflow-hidden rounded-2xl shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlideIndex}
                  src={currentSlide.image}
                  alt="AnimalLife hero image"
                  className="w-full h-full object-cover"
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: isSlowConnection ? 0.3 : 0.5,
                    ease: "easeInOut",
                  }}
                  loading={currentSlideIndex === 0 ? "eager" : "lazy"}
                />
              </AnimatePresence>

              {/* Loading overlay for unloaded images */}
              {!imagesLoaded[currentSlideIndex] && (
                <div className="absolute inset-0 bg-gray-200/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex
                      ? "bg-[#F9F4DF] w-8"
                      : "bg-[#F9F4DF]/40 w-2 hover:bg-[#F9F4DF]/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Section - Better aligned */}
          <div className="flex-1 flex flex-col justify-center text-center px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-content-${currentSlideIndex}`}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: isSlowConnection ? 0.2 : 0.3,
                  ease: "easeOut",
                }}
                className="space-y-6"
              >
                <h1
                  className="text-lg sm:text-2xl md:text-xl font-bold leading-tight text-[#F9F4DF] max-w-sm mx-auto"
                  style={{ fontFamily: "Poppins" }}
                >
                  {currentSlide.heading}
                </h1>

                <p
                  className="text-sm sm:text-base leading-relaxed text-[#F9F4DF]/90 max-w-xs sm:max-w-sm mx-auto"
                  style={{ fontFamily: "Poppins" }}
                >
                  {currentSlide.subheading}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="pt-6">
              <Link
                href="/products"
                className="inline-flex items-center justify-center font-semibold rounded-full px-6 py-3 text-sm sm:text-base shadow-lg min-w-[160px] touch-manipulation transform transition-transform active:scale-95 bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white"
              >
                View Products
                <IoIosArrowDropright className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex  min-h-screen">
        {/* Left: Text Content */}
        <div className="flex-2 flex flex-col justify-center pl-16 xl:pl-24 pr-8 xl:pr-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`desktop-content-${currentSlideIndex}`}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: isSlowConnection ? 0.3 : 0.5,
                ease: "easeOut",
              }}
              className="max-w-xl"
            >
              <h1
                className="text-xl xl:text-3xl font-bold text-[#F9F4DF] mb-6 leading-tight"
                style={{ fontFamily: "Poppins" }}
              >
                {currentSlide.heading}
              </h1>

              <p
                className="text-lg xl:text-xl text-[#F9F4DF]/90 mb-8 leading-relaxed"
                style={{ fontFamily: "Poppins" }}
              >
                {currentSlide.subheading}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="pt-6">
            <Link
              href="/products"
              className="inline-flex items-center justify-center font-bold rounded-full px-8 py-4 text-lg shadow-lg gap-2 transform transition-transform hover:scale-105 bg-[#F9F4DF] text-[#0A3024] hover:bg-[#A7552E] hover:text-white"
            >
              View Products
              <IoIosArrowDropright className="h-5 w-5 " />
            </Link>
          </div>
        </div>

        {/* Right: Image with curved edge */}
        <div className="flex-1 relative overflow-hidden">
          <div
            className="absolute inset-0 z-10"
            style={{
              clipPath: "ellipse(90% 100% at 100% 50%)",
              background: "#fff",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={`desktop-image-${currentSlideIndex}`}
              src={currentSlide.image}
              alt="AnimalLife hero image"
              className="relative z-20 w-full h-full object-cover"
              style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: isSlowConnection ? 0.4 : 0.6,
                ease: "easeInOut",
              }}
              loading={currentSlideIndex === 0 ? "eager" : "lazy"}
            />
          </AnimatePresence>

          {/* Loading overlay for desktop */}
          {!imagesLoaded[currentSlideIndex] && (
            <div
              className="absolute inset-0 z-30 bg-gray-200/20 backdrop-blur-sm flex items-center justify-center"
              style={{ clipPath: "ellipse(90% 100% at 100% 50%)" }}
            >
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import BackgroundVideo from "next-video/background-video";

// Import single combined video
import heroVideo from "@/videos/hero-section-video.mp4";

import { Locale } from '@/lib/i18n/config';
import { t } from '@/lib/i18n/translations';

const getTextSlides = (locale: Locale) => [
  { start: 0, end: 5, heading: t(locale, 'hero.slides.0') },
  { start: 5, end: 11, heading: t(locale, 'hero.slides.1') },
  { start: 11, end: 15, heading: t(locale, 'hero.slides.2') },
  { start: 15, end: 19, heading: t(locale, 'hero.slides.3') },
];

export function HeroSection({ locale }: { locale: Locale }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle time updates to sync text with video
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const textSlides = getTextSlides(locale);
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
    <section
      id="home"
      className="relative md:h-screen w-screen overflow-hidden"
    >
      <div className="hidden md:block h-full">
        <BackgroundVideo
          ref={videoRef}
          src={heroVideo}
          onTimeUpdate={handleTimeUpdate}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="md:hidden w-full aspect-video">
        <BackgroundVideo
          ref={videoRef}
          src={heroVideo}
          onTimeUpdate={handleTimeUpdate}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`heading-${currentTextIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight whitespace-pre-line"
            >
              {getTextSlides(locale)[currentTextIndex].heading}
            </motion.h1>
          </AnimatePresence>

          <div className="mt-8 md:mt-12">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center justify-center font-bold rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg shadow-lg gap-1 sm:gap-2 transform transition-all hover:scale-105 bg-white text-[#13513D] hover:bg-[#F9F4DF]"
            >
              {t(locale, 'hero.cta')}
              <IoIosArrowDropright className="h-4 w-4 md:h-5 md:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { AcademyPosts } from "@/app/data/academy-posts";

const blogPosts = AcademyPosts;

export default function AcademyPage() {
  return (
    <div className="min-h-full bg-white">
      {/* Hero Section */}
      <section className="relative md:min-h-[65vh] overflow-hidden flex items-center">
        {/* Desktop Background Image */}
        <div className="hidden md:block absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/academy-banner.webp')",
            }}
          />
        </div>

        {/* Mobile Background Image */}
        <div className="md:hidden w-full relative">
          <img
            src="/academy-banner.webp"
            alt="Academy Banner"
            className="w-full h-auto object-cover"
            style={{ backgroundColor: "#FFFCEF" }}
          />

          {/* Mobile Title Overlay */}
          <div className="absolute top-4 left-4 w-3/4">
            <h1 className="text-xl font-bold text-white leading-tight">
              Welcome to AnimaLife Academy!
            </h1>
          </div>

          {/* Mobile Content Below Image */}
          <div className="px-4 py-6 text-center">
            <p className="text-sm text-[#2d5a3d] leading-relaxed max-w-sm mx-auto">
              Your trusted space where science meets everyday pet care.
            </p>
          </div>
        </div>

        {/* Desktop Content Overlay */}
        <div className="hidden md:block absolute inset-0 z-10 container mx-auto px-4 py-24  items-center">
          <div className="max-w-3xl">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-8 leading-tight">
                Welcome to AnimaLife Academy!
              </h1>

              <p className="max-w-[650px] w-full text-base sm:text-lg md:text-lg lg:text-xl xl:text-lg 2xl:text-xl text-white/90 leading-relaxed">
                Because a healthier pet starts with a better-informed you. At
                AnimaLife, we know that being a great pet parent goes beyond
                just feeding right. It's about truly understanding your dog and
                cat's needs at every stage. That's why we created AnimaLife
                Academy: a trusted space where science meets everyday care.
                Here, you'll find expert-backed articles that simplify
                nutrition, strengthen the human–pet bond, and guide you through
                safer, more mindful pet parenting. Whether you're raising a
                playful kitten, navigating puppyhood, or supporting your senior
                fur baby, this is your go-to guide for building a happier and
                healthier life together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4">
            <div className="flex gap-4 w-max">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/academy/${post.slug}`}>
                  <Card className="w-80 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-0 rounded-2xl overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                          sizes="320px"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#4ade80] text-white hover:bg-[#22c55e] group-hover:scale-110 transition-transform duration-300">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-bold text-[#2d5a3d] mb-3 line-clamp-2 group-hover:text-[#1e3a2a] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                          {post.excerpt}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/academy/${post.slug}`}>
                <Card className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-0 rounded-2xl overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#4ade80] text-white hover:bg-[#22c55e] group-hover:scale-110 transition-transform duration-300">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-[#2d5a3d] mb-3 line-clamp-2 group-hover:text-[#1e3a2a] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

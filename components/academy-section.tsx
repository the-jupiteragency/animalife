"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { AcademyPosts } from "@/app/data/academy-posts";
import { AcademyPostsAr } from "@/app/data/academy-posts-ar";
import { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/translations";

export function AcademySection({ locale }: { locale: Locale }) {
  const blogPosts = (locale === "ar" ? AcademyPostsAr : AcademyPosts).slice(
    0,
    3
  );

  return (
    <section
      id="academy"
      className="py-12 md:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-row items-center justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-[#2d5a3d]">
            {t(locale, "academy.title")}
          </h2>
          <Link href={`/${locale}/academy`}>
            <Button
              variant="ghost"
              className="text-[#2d5a3d] hover:text-[#1e3a2a] whitespace-nowrap"
            >
              {t(locale, "academy.viewMore")}
              <IoIosArrowForward
                className={`h-4 w-4 ${locale === "ar" ? "mr-2 rotate-180" : "ml-2"}`}
              />
            </Button>
          </Link>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="flex gap-4 w-max">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/${locale}/academy/${post.slug}`}>
                <Card className="w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-0 rounded-2xl overflow-hidden group">
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
            <Link key={post.id} href={`/${locale}/academy/${post.slug}`}>
              <Card className=" transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-0 rounded-2xl overflow-hidden group">
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
  );
}

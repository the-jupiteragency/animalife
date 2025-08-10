"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { AcademyPosts } from "@/app/data/academy-posts";

// Remove the hardcoded blogPosts array and use:
const blogPosts = AcademyPosts;

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Add top padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Banner Section */}
        <section className="relative h-[530px] bg-[#2d5a3d] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/academy-banner.webp"
              alt="Academy Banner"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Welcome to AnimaLife Academy!
              </h1>
              <p className="text-lg md:text-lg text-white/90 leading-relaxed">
                Because a healthier pet starts with a better informed you. At
                AnimaLife, we know that being a great pet parent goes beyond
                just feeding right. It’s about truly understanding your dog’s
                needs at every stage. That’s why we created AnimaLife Academy: a
                trusted space where science meets everyday care. Here, you’ll
                find expert-backed articles that simplify nutrition, strengthen
                the pet & parent bond, and guide you through safer, more mindful
                pet parenting. Whether you're tackling puppyhood, supporting a
                senior dog, or simply learning what love looks like in their
                language, this is your go-to guide for raising a happy, healthy
                friend.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/academy/${post.id}`}>
                  <Card className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-0 rounded-2xl overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      </div>{" "}
      {/* Close pt-20 div */}
    </div>
  );
}

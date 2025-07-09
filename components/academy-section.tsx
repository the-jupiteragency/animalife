// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";

// const blogPosts = [
//   {
//     id: 1,
//     title: "How to care for your golden retriever?",
//     excerpt:
//       "The Pomeranian, also known as the Pomeranian (Pom dog), is always at the top of the cutest pets. Not only that, the small, lovely, smart, friendly, an...",
//     image: "/blog1.webp",
//     category: "Pet knowledge",
//   },
//   {
//     id: 2,
//     title: "Dog Diet You Need To Know",
//     excerpt:
//       "Dividing a dog's diet may seem simple at first, but there are some things you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs...",
//     image: "/blog2.webp",
//     category: "Pet knowledge",
//   },
//   {
//     id: 3,
//     title:
//       "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
//     excerpt:
//       "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
//     image: "/blog3.webp",
//     category: "Pet knowledge",
//   },
// ];

// export function AcademySection() {
//   return (
//     <section
//       id="academy"
//       className="py-12 md:py-20 bg-gray-50 relative overflow-hidden"
//     >
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 md:mb-12 gap-4">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5a3d]">
//             AnimaLife Academy
//           </h2>
//           <Button
//             variant="ghost"
//             className="text-[#2d5a3d] hover:text-[#1e3a2a] self-start lg:self-auto"
//           >
//             View more <IoIosArrowForward className="ml-2 h-4 w-4" />
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {blogPosts.map((post, index) => (
//             <Card
//               key={post.id}
//               className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white border-0 rounded-2xl overflow-hidden group"
//             >
//               <CardContent className="p-0">
//                 <div className="aspect-video relative overflow-hidden">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     fill
//                     className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <Badge className="bg-[#4ade80] text-white hover:bg-[#22c55e] group-hover:scale-110 transition-transform duration-300">
//                       {post.category}
//                     </Badge>
//                   </div>
//                 </div>

//                 <div className="p-4 md:p-6">
//                   <h3 className="text-lg md:text-xl font-bold text-[#2d5a3d] mb-3 line-clamp-2 group-hover:text-[#1e3a2a] transition-colors duration-300">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
//                     {post.excerpt}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { AcademyPosts } from "@/app/data/academy-posts";

export function AcademySection() {
  const blogPosts = AcademyPosts.slice(0, 3);

  return (
    <section
      id="academy"
      className="py-12 md:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5a3d]">
            AnimaLife Academy
          </h2>
          <Link href="/academy">
            <Button
              variant="ghost"
              className="text-[#2d5a3d] hover:text-[#1e3a2a] self-start lg:self-auto"
            >
              View more <IoIosArrowForward className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

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
  );
}

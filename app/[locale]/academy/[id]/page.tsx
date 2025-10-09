import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AcademyPosts } from "@/app/data/academy-posts";
import { AcademyPostsAr } from "@/app/data/academy-posts-ar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/translations";

export default function PostDetailPage({
  params,
}: {
  params: { id: string; locale: Locale };
}) {
  const blogPosts = params.locale === "ar" ? AcademyPostsAr : AcademyPosts;
  const post =
    blogPosts.find(
      (p) => p.slug === params.id || p.id.toString() === params.id
    ) || blogPosts[0];

  // Get next post for "read more" functionality
  const currentIndex = blogPosts.findIndex(
    (p) => p.slug === params.id || p.id.toString() === params.id
  );
  const nextPost =
    currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : blogPosts[0];

  return (
    <div className="min-h-screen =">
      {/* Add top padding to account for fixed header */}
      <div className="pt-1 md:pt-16">
        {/* Navigation */}
        <div>
          <div className="container mx-auto px-4 py-4">
            <Link
              href={`/${params.locale}/academy`}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              {params.locale === "ar" ? (
                <>
                  {t(params.locale, "common.backToAcademy")}
                  <ArrowLeft className="w-4 h-4 mr-3 " />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t(params.locale, "common.backToAcademy")}
                </>
              )}
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Image */}
          <div className="aspect-video relative overflow-hidden rounded-2xl mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Article Header */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5a3d] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-8">
              <span>
                {t(params.locale, "common.writtenBy")} {post.author}
              </span>
            </div>

            {/* Article Content */}
            <div className="max-w-none [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-base [&_h1]:text-3xl md:[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-[#2d5a3d] [&_h1]:mb-6 [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#2d5a3d] [&_h2]:mb-4 [&_h2]:mt-8 [&_h3]:text-lg md:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#2d5a3d] [&_h3]:mb-3 [&_h3]:mt-6 [&_strong]:text-[#2d5a3d] [&_strong]:font-semibold [&_em]:text-[#2d5a3d] [&_em]:italic [&_ul]:mb-6 [&_li]:mb-2 [&_li]:text-gray-700 [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:shadow-lg [&_table]:rounded-lg [&_table]:overflow-hidden [&_table]:bg-white [&_thead]:bg-[#2d5a3d] [&_th]:text-white [&_th]:font-semibold [&_th]:p-3 md:[&_th]:p-4 [&_th]:text-left [&_th]:border-0 [&_tbody]:bg-white [&_tr]:border-b [&_tr]:border-gray-200 [&_tr:nth-child(even)]:bg-gray-50 [&_td]:p-3 md:[&_td]:p-4 [&_td]:text-gray-700 [&_td]:border-0 [&_td]:font-medium [&_table_tbody_tr:first-child_td:first-child]:font-bold [&_table_tbody_tr:first-child_td:first-child]:text-[#2d5a3d] [&_table_tbody_tr:nth-child(7)_td:first-child]:font-bold [&_table_tbody_tr:nth-child(7)_td:first-child]:text-[#2d5a3d] [&_table_tbody_tr:nth-child(14)_td:first-child]:font-bold [&_table_tbody_tr:nth-child(14)_td:first-child]:text-[#2d5a3d]">
              <div className="[&_table]:overflow-x-auto [&_table]:rounded-lg">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Read More Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${params.locale === "ar" ? "text-left" : ""}`}
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#2d5a3d] mb-2">
                    {t(params.locale, "common.continueReading")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t(params.locale, "common.discoverMore")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href={`/${params.locale}/academy`}>
                    <Button
                      variant="outline"
                      className="border-[#2d5a3d] text-[#2d5a3d] hover:bg-[#2d5a3d] hover:text-white"
                    >
                      {t(params.locale, "common.allArticles")}
                    </Button>
                  </Link>
                  <Link href={`/${params.locale}/academy/${nextPost.slug}`}>
                    <Button className="bg-[#2d5a3d] text-white hover:bg-[#1e3a2a]">
                      {params.locale === "ar" ? (
                        <>
                          {t(params.locale, "common.nextArticle")}
                          <ArrowLeft className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          {t(params.locale, "common.nextArticle")}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { AcademyPosts } from "@/app/data/academy-posts";

// Remove the hardcoded blogPosts array and use:
const blogPosts = AcademyPosts;

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id);
  const post = blogPosts.find((p) => p.id === postId) || blogPosts[0];

  // Get next post for "read more" functionality
  const nextPost = blogPosts.find((p) => p.id === postId + 1) || blogPosts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Add top padding to account for fixed header */}
      <div className="pt-24">
        {/* Navigation */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Link
              href="/academy"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Academy
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Hero Image */}
          <div className="aspect-video relative overflow-hidden rounded-2xl mb-8">
            <Image
              src="/post-banner.png"
              alt={post.title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Article Header */}
          <div className="bg-white rounded-2xl p-8 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5a3d] mb-6">
              Finibus Bonorum et Malorum
            </h1>

            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">Written by {post.author}</span>
              <span>{post.date}</span>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>

              <p className="text-gray-700 leading-relaxed">
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Read More Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#2d5a3d] mb-2">
                    Continue Reading
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover more pet care tips and expert advice
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href="/academy">
                    <Button
                      variant="outline"
                      className="border-[#2d5a3d] text-[#2d5a3d] hover:bg-[#2d5a3d] hover:text-white"
                    >
                      All Articles
                    </Button>
                  </Link>
                  <Link href={`/academy/${nextPost.id}`}>
                    <Button className="bg-[#2d5a3d] text-white hover:bg-[#1e3a2a]">
                      Next Article
                      <ArrowRight className="w-4 h-4 ml-2" />
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

import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllPosts, getAllTags } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about Flutter development, mobile app development, and software engineering best practices.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Sharing my knowledge and experiences in Flutter development, mobile
            app development, and software engineering.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <span className="text-dark-400 text-sm mr-2">Topics:</span>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-dark-800 text-dark-300 border border-dark-700 hover:border-primary-500/50 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Posts */}
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-6 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-dark-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-dark-700 text-dark-300"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="flex items-center gap-1 text-primary-400 text-sm group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-dark-800 flex items-center justify-center">
              <Tag size={40} className="text-dark-600" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Coming Soon
            </h2>
            <p className="text-dark-400 max-w-md mx-auto mb-6">
              I&apos;m working on some exciting articles about Flutter
              development, mobile app architecture, and best practices. Check
              back soon!
            </p>
            <Link
              href="/"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              &larr; Back to Portfolio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

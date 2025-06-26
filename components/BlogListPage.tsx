"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
}

interface BlogListPageProps {
  postsEn: Post[];
  postsKa: Post[];
}

export default function BlogListPage({ postsEn, postsKa }: BlogListPageProps) {
  const { locale, t } = useLanguage();

  const posts = locale === "ka" ? postsKa : postsEn;

  return (
    <div className="min-h-screen py-20 px-6 max-[940px]:py-10 max-[940px]:px-3">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-5xl mt-20 font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 max-[600px]:text-[35px] max-[600px]:mb-4 max-[450px]:text-[23px]">
          {t.blogs.header}
        </h1>
      </div>

      <section className="max-w-4xl mx-auto px-6 py-12 max-[940px]:py-6 max-[450px]:py-0">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-[30px]">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="rounded-lg border border-white/10 bg-[rgba(31,43,71,0.2)] p-6 shadow-md hover:shadow-[0_0_25px_cyan] transition-all duration-200 group backdrop-blur-md hover:scale-105 max-[450px]:p-4">
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors max-[410px]:text-[17px]">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-300 mb-4 line-clamp-2 max-[410px]:text-[14px]">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-white mb-2">
              {t.blogs.no_blogs}
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}

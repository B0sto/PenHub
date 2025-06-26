"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml: string;
}

interface BlogDetailPageProps {
  postEn: BlogPost;
  postKa: BlogPost;
}

export default function BlogDetailPage({
  postEn,
  postKa,
}: BlogDetailPageProps) {
  const { locale, t } = useLanguage();
  const post = locale === "ka" ? postKa : postEn;

  return (
    <div className="min-h-screen mb-30">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/blog"
          className="self-start px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-lg font-semibold shadow-md shadow-cyan-500/50 cursor-pointer flex items-center w-fit gap-x-[5px] max-[940px]:px-4 max-[940px]:py-2 max-[650px]:text-[15px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.blogs.go_back}</span>
        </Link>

        <article className="prose prose-invert max-w-none">
          <div
            className="text-white/90 leading-relaxed text-lg max-[750px]:text-[15px]
    [&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-8 
    [&>h2]:text-[26px] [&>h2]:font-semibold [&>h2]:mb-4 [&>h2]:mt-6 
    [&>h3]:text-[22px] [&>h3]:font-semibold [&>h3]:mb-3 [&>h3]:mt-5 

    max-[750px]:[&>h1]:text-[22px] 
    max-[750px]:[&>h2]:text-[18px] 
    max-[750px]:[&>h3]:text-[16px] 

    [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>ul]:ml-6 
    [&>li]:mb-2 [&>li]:text-white/80 [&>blockquote]:border-l-4 
    [&>blockquote]:border-blue-400 [&>blockquote]:pl-4 [&>blockquote]:italic 
    [&>blockquote]:text-white/70 [&>code]:bg-gray-800 [&>code]:px-2 [&>code]:py-1 
    [&>code]:rounded [&>code]:text-blue-300 [&>pre]:bg-gray-900 [&>pre]:p-4 
    [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-white/10"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </div>
  );
}

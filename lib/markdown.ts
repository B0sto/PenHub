import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  contentHtml?: string;
}

const postsDirectory = path.join(process.cwd(), "blogs");

/**
 * @param locale 
 */
export function getSortedPostsData(locale: "en" | "ka" = "en"): BlogPost[] {
  const localeDir = path.join(postsDirectory, locale);
  const fileNames = fs.readdirSync(localeDir);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(localeDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
    };
  });

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

/**
 * @param slug 
 * @param locale 
 */
export async function getPostData(
  slug: string, 
  locale: 'en' | 'ka' = 'en'
): Promise<BlogPost & { contentHtml: string }> {
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    contentHtml,
  };
}

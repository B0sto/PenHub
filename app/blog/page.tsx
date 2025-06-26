
import { getSortedPostsData } from "@/lib/markdown";
import BlogListPage from "@/components/BlogListPage";

export default async function BlogList() {
  const postsEn = getSortedPostsData("en");
  const postsKa = getSortedPostsData("ka");

  return <BlogListPage postsEn={postsEn} postsKa={postsKa} />;
}

import BlogDetailPage from "@/components/BlogDetailPage";
import { getPostData } from "@/lib/markdown";

interface BlogDetailProps {
  params: { slug: string };
}

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params
  const postEn = await getPostData(slug, "en");
  const postKa = await getPostData(slug, "ka");

  return <BlogDetailPage postEn={postEn} postKa={postKa} />;
}

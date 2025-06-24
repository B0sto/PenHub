import CoursePageClient from "@/components/CoursePageClient";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;

  return <CoursePageClient id={id} />;
}

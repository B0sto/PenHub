"use client";
import CourseCard from "@/components/CourseCard";
import { useLanguage } from "@/context/LanguageContext";

export default function CoursesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-5xl mt-20 font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 max-[600px]:text-[35px] max-[600px]:mb-4 max-[450px]:text-[23px]">
          {t.course_page.head_text}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.courses.map((course) => (
            <CourseCard key={course.id} {...course} level_btn={t.course_btns.level} />
          ))}
        </div>
      </div>
    </div>
  );
}

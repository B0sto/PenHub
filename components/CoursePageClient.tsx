"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import enCourses from "@/data/en.json";
import kaCourses from "@/data/ka.json";
import { useLanguage } from "@/context/LanguageContext";
import BackButton from "@/components/BackButton";

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  image?: string;
  link: string;
  details: string;
  access: string;
  certificate: string;
  duration: string;
  will_learn1: string;
  will_learn2: string;
  will_learn3: string;
}

export default function CoursePageClient({ id }: { id: string }) {
  const { locale, t } = useLanguage();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const coursesData = locale === "ka" ? kaCourses : enCourses;
    const courses = coursesData.courses || [];
    const foundCourse = courses.find((c: Course) => c.id === id) || null;
    setCourse(foundCourse);
  }, [locale, id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-white text-xl">Course not found.</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen mb-30">
      <div className="max-w-7xl mx-auto px-6 py-8 max-[750px]:px-3">
        <BackButton />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 mt-8 mb-12">
          <div className="relative px-8 py-12 lg:py-16 max-[750px]:p-4">
            <div className="flex flex-row items-start lg:items-center gap-12 max-[790px]:flex-col max-[790px]:gap-4">
              <div className="flex-shrink-0">
                <div className="lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src={course.image || "/noimage.jpeg"}
                    alt={course.title || "Course image"}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight max-[750px]:text-[25px]">
                    {course.title}
                  </h1>
                  <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                    {t.course_btns.level}: {course.level}
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg max-[750px]:py-2 max-[750px]:px-4">
                  <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t.course_btns.start_btn}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="rounded-2xl border border-white/10 p-8 max-[750px]:p-4">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 max-[750px]:text-[18px]">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {t.course_btns.course_overview}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed text-lg whitespace-pre-line max-[750px]:text-[14px]">
                  {course.details}
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 max-[750px]:text-[19px]">
                <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {t.course_btns.What_will_learn}
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 max-[750px]:text-[14px]"></div>
                  <span>{course.will_learn1}</span>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 max-[750px]:text-[14px]"></div>
                  <span>{course.will_learn2}</span>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0 max-[750px]:text-[14px]"></div>
                  <span>{course.will_learn3}</span>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 p-6 space-y-6">
              <h3 className="text-lg font-semibold text-white">
                {t.course_btns.course_information}
              </h3>

              <div className="space-y-4">
                {/* Duration */}
                <div className="flex items-start justify-between py-3 border-b border-white/10 max-[500px]:flex-col max-[500px]:items-start">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-blue-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">
                      {t.course_btns.duration}
                    </span>
                  </div>
                  <span className="text-white font-medium text-sm max-[500px]:ml-8 max-[500px]:mt-2">
                    {course.duration}
                  </span>
                </div>

                {/* Certificate */}
                <div className="flex items-start justify-between py-3 border-b border-white/10 max-[500px]:flex-col max-[500px]:items-start">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-green-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">
                      {t.course_btns.certificate}
                    </span>
                  </div>
                  <span className="text-white font-medium text-sm max-[500px]:ml-8 max-[500px]:mt-2">
                    {course.certificate}
                  </span>
                </div>

                {/* Level */}
                <div className="flex items-start justify-between py-3 border-b border-white/10 max-[500px]:flex-col max-[500px]:items-start">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-purple-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">
                      {t.course_btns.level}
                    </span>
                  </div>
                  <span className="text-white font-medium text-sm max-[500px]:ml-8 max-[500px]:mt-2">
                    {course.level}
                  </span>
                </div>

                {/* Access */}
                <div className="flex items-start justify-between py-3 border-b border-white/10 max-[500px]:flex-col max-[500px]:items-start">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-orange-400 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">
                      {t.course_btns.access}
                    </span>
                  </div>
                  <span className="text-white font-medium text-sm max-[500px]:ml-8 max-[500px]:mt-2">
                    {course.access}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

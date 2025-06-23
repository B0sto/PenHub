"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  
  return (
    <button
      onClick={() => router.back()}
      className={`self-start px-6 py-3 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-lg font-semibold shadow-md shadow-cyan-500/50 cursor-pointer`}
    >
      ← Back to Courses
    </button>
  );
}
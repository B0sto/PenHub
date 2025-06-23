"use client";

import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  level: string;
  image?: string;
};

const CourseCard: FC<CourseCardProps> = ({
  id,
  title,
  description,
  level,
  image = "https://builtin.com/sites/www.builtin.com/files/2024-10/cybersecurity.png"
}) => {
  return (
    <Link
      href={`/courses/${id}`}
      className="p-[2px] rounded-2xl transition-transform hover:scale-[1.02]"
    >
      <div className="border border-white/10 bg-[rgba(31,43,71,0.2)] backdrop-blur-md rounded-2xl overflow-hidden h-full shadow-md hover:shadow-[0_0_25px_cyan] transition-all duration-300">
        <div className="relative min-h-[250px] w-full">
          <Image
            src={image || '/noimage.jpeg'}
            alt={title}
            fill
            className="object-cover object-center group-hover:opacity-90 transition-opacity"
          />
        </div>

        <div className="p-6 flex flex-col justify-between min-h-[230px]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
              {title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
          </div>

          <div className="mt-4">
            <span className="inline-block text-xs uppercase tracking-wide text-cyan-300 bg-cyan-300/10 px-3 py-1 rounded-full">
              Level: {level}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

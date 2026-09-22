import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardOptions {
  name: string;
  description?: string;
  image: StaticImageData;
  stars: number;
  url: string;
  featured?: boolean;
  subItems?: { name: string; description: string }[];
}

export default function ProjectCard(
  { name, description, image, stars, url, featured, subItems }: ProjectCardOptions,
) {
  return (
    <Link
      href={url}
      className={`group relative flex flex-col overflow-hidden rounded-xl bg-dark-gray border border-neutral-800 hover:border-neutral-600 duration-150 ${
        featured ? "sm:col-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[2/1] sm:aspect-[3/1]" : "aspect-[16/10]"}`}>
        <Image
          className="object-cover object-top w-full h-full group-hover:scale-105 duration-300"
          alt={`${name} preview`}
          src={image}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-gray from-15% via-dark-gray/40 to-transparent" />
      </div>
      <div className="relative -mt-8 p-4 pt-0">
        <div className="flex items-center gap-2">
          <p className="text-base flex-1">{name}</p>
          <span className="text-neutral-400">{stars} ⭐</span>
          <FiExternalLink className="text-neutral-400 opacity-0 group-hover:opacity-100 duration-150" size={16} />
        </div>
        {description && <p className="text-neutral-400 mt-1">{description}</p>}
        {subItems && (
          <ul className="flex flex-wrap gap-1.5 mt-3">
            {subItems.map((subItem) => (
              <li
                key={subItem.name}
                title={subItem.description}
                className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-neutral-300"
              >
                {subItem.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}

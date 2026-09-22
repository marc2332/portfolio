import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface CardOptions {
  title: string;
  description?: string;
  info: string;
  url?: string;
  subItems?: { name: string; description: string }[];
}

export default function Card({ title, description, info, url, subItems }: CardOptions) {
  const Card = () => (
    <div className="flex mb-1.5 w-full">
      <p className="hidden sm:flex -ml-40 mr-4 justify-end items-center text-neutral-300 w-36">
        {info}
      </p>
      <div className={`hover:bg-neutral-900 duration-75 flex p-3 px-6 bg-dark-gray border-neutral-950 border rounded-xl justify-between items-center flex-1`}>
        <div className="flex-1">
          <p>
            {title}
            {description
              ? <span className="text-neutral-400 pr-2 ml-3">{description}</span>
              : undefined}
          </p>

          {subItems && (
            <ul className="list-disc list-inside mt-2 text-neutral-400">
              {subItems.map((subItem) => (
                <li key={subItem.name}>
                  {subItem.name} {subItem.description}
                </li>
              ))}
            </ul>
          )}

          <p className="block sm:hidden mr-4 justify-end items-center text-neutral-300 w-36">
            {info}
          </p>
        </div>
        {url ? <FiExternalLink size={20} /> : undefined}
      </div>
    </div>
  );

  if (url) {
    return (
      <Link href={url}>
        <Card />
      </Link>
    );
  } else {
    return <Card />;
  }
}

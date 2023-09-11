import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface CardOptions {
  title: string;
  description?: string;
  info: string;
  url?: string;
}

export default function Card({ title, description, info, url }: CardOptions) {
  const Card = () => (
    <div className="flex w-full mb-2">
      <p className="hidden sm:flex w-36 mr-4 justify-end items-center text-neutral-300">
        {info}
      </p>
      <div className="hover:bg-neutral-900 duration-75 flex-1 flex p-3 px-6 bg-dark-gray border-neutral-950 border-2 rounded-xl justify-between items-center">
        <div className="flex-1">
          <p>{title}</p>
          {description
            ? <span className="text-neutral-400 pr-2">{description}</span>
            : undefined}

          <p className="block sm:hidden w-36 mr-4 justify-end items-center text-neutral-300">
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

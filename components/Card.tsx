import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface CardOptions {
  title: string;
  description?: string;
  info: string;
  url?: string;
  variant?: 'default' | 'sub';
}

export default function Card({ title, description, info, url, variant = 'default' }: CardOptions) {
  const isSub = variant === 'sub';
  const Card = () => (
    <div className={`flex mb-2 ${isSub ? 'ml-8 sm:ml-16 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)]' : 'w-full'}`}>
      <p className={`hidden sm:flex mr-4 justify-end items-center text-neutral-300 ${isSub ? 'w-32' : 'w-36'}`}>
        {info}
      </p>
      <div className={`hover:bg-neutral-900 duration-75 flex p-3 px-6 bg-dark-gray border-neutral-950 border-2 rounded-xl justify-between items-center ${isSub ? 'text-sm flex-1' : 'flex-1'}`}>
        <div className="flex-1">
          <p>{title}</p>
          {description
            ? <span className="text-neutral-400 pr-2">{description}</span>
            : undefined}

          <p className={`block sm:hidden mr-4 justify-end items-center text-neutral-300 ${isSub ? 'w-32' : 'w-36'}`}>
            {info}
          </p>
        </div>
        {url ? <FiExternalLink size={isSub ? 16 : 20} /> : undefined}
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

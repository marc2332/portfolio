import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface SocialLinkOptions {
  url: string;
  title?: string;
}

export default function SocialLink(
  { children, url, title }: PropsWithChildren<SocialLinkOptions>,
) {
  return (
    <Link
      href={url}
      title={title}
      aria-label={title}
      className="flex items-center gap-2 text-neutral-400 hover:text-white duration-75"
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface CiccularCardOptions {
  url?: string;
  title?: string;
}

export default function CircularCard(
  { children, url, title }: PropsWithChildren<CiccularCardOptions>,
) {
  const Card = () => (
    <div
      title={title}
      className="hover:bg-neutral-900 duration-75 w-14 h-14 flex justify-center items-center  mb-2 rounded-full bg-dark-gray border-2 border-neutral-950"
    >
      {children}
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

import Link from "next/link";

interface CardOptions {
  title: string;
  info: string;
  url: string;
}

export default function Card({ title, info, url }: CardOptions) {
  return (
    <li className="post-row">
      <time dateTime={info}>{info}</time>
      <Link href={url}>{title} <span aria-hidden="true">↗</span></Link>
    </li>
  );
}

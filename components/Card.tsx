import React from "react";
import { Link } from "./Link";

interface CardOptions {
  description: string;
  link: string;
}

export default function Card({ description, link }: CardOptions) {
  return (
    <div>
      <p>{description}</p>
      <Link target="_blank" href={link}>Project info</Link>
    </div>
  );
}

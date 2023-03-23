import React from "react";
import { LinkGreenVariant } from "./Link";

interface CardOptions {
  description: string;
  link: string;
}

export default function Card({ description, link }: CardOptions) {
  return (
    <div>
      <p>{description}</p>
      <LinkGreenVariant target="_blank" href={link}>
        Source code
      </LinkGreenVariant>
    </div>
  );
}

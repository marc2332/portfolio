import NextLink from "next/link";
import { PropsWithChildren } from "react";

export const Link = (
  { href, children }: PropsWithChildren<{ href: string }>,
) => {
  return (
    <NextLink
      className="underline text-neutral-400"
      target="_blank"
      href={href}
    >
      {children}
    </NextLink>
  );
};

'use client';

import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-10 sm:pl-[200px] md:w-[86.25%] lg:w-[57.5%] mx-auto sm:translate-x-[-40px]">
      {children}
    </div>
  );
};

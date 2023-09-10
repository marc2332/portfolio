import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-10 md:w-9/12 lg:w-1/2 mx-auto">
      {children}
    </div>
  );
};

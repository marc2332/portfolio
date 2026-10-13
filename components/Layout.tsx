import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      {children}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Marc Espín</span>
        <a href="https://github.com/marc2332/portfolio">source</a>
      </footer>
    </div>
  );
};

import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/Navbar";
import { BlogPost } from "../components/BlogPost";
import "./global.css";
import "@fontsource/jetbrains-mono";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <NavBar />
      {router.pathname.startsWith("/posts/") ? (
        <BlogPost key={router.asPath}><Component {...pageProps} /></BlogPost>
      ) : (
        <Component {...pageProps} />
      )}
      <Analytics />
    </Layout>
  );
}

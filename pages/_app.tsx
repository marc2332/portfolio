import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/Navbar";
import "./global.css";
import "@fontsource/jetbrains-mono";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

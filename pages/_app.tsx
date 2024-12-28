import React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/Navbar";
import "./global.css";
import "@fontsource/inter";
import "@fontsource/jetbrains-mono";
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

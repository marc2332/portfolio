import React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/Navbar";
import "./global.css";
import "@fontsource/inter";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
    </Layout>
  );
}

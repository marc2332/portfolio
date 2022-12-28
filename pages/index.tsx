import Head from "next/head";
import React, { useState } from "react";
import Card from "../components/Card";
import Chip from "../components/Chip";
import { NormalContainer } from "../components/Containers";
import { Link } from "../components/Link";

const projects = [
  {
    name: " 🦀 Freya",
    link: "https://github.com/marc2332/freya",
    description:
      "Cross-platform GUI library for Rust powered by Skia and Dioxus.",
  },
  {
    name: " 💻 Graviton Editor",
    link: "https://github.com/Graviton-Code-Editor/Graviton-App",
    description: "Cross-platform minimal code editor.",
  },
  {
    name: " 🦕 Astrodon",
    link: "https://github.com/astrodon/astrodon",
    description:
      "Cross-platform desktop webview-based app framework for Deno, powered by Tauri.",
  },
  {
    name: "💳 Reactor Wallet",
    link: "https://github.com/marc2332/solana-mobile-wallet",
    description:
      "Experimental cross-platform wallet for Solana, made in Flutter.",
  },
  {
    name: "💃 Sardana-Jupyter",
    link: "https://github.com/marc2332/sardana-jupyter",
    description:
      "Run Sardana (a SCADA control system made in ALBA Synchrotron) in Jupyter Lab.",
  },
];

export default function Home() {
  const [projectSelected, setSelectedProject] = useState(0);

  return (
    <NormalContainer>
      <Head>
        <title>Marc Espín</title>
      </Head>
      <div>
        <h1>
          <b>Marc</b> Espín
        </h1>
        <p>
          I am a Software Developer trying to learn new things every day. I like
          to work on open source projects.
          <br />
          I am an experienced React ⚛️ & TypeScript 💙 developer.
          <br />
          At the moment I am working on Rust 🦀 projects in my free time.
        </p>
        <h3>
          Contact
        </h3>
        <ul>
          <li>
            <Link target="_blank" href="https://github.com/marc2332">
              {"->"} GitHub
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/"
            >
              {"->"} Linkedin
            </Link>
          </li>
          <li>
            <Link href="mailto:mespinsanz@gmail.com">
              {"->"} mespinsanz@gmail.com
            </Link>
          </li>
        </ul>
        <h3>
          Projects
        </h3>
        {projects.map((project, projectIndex) => {
          return (
            <Chip
              key={project.name}
              value={project.name}
              selected={projectSelected == projectIndex}
              onSelected={() => setSelectedProject(projectIndex)}
            />
          );
        })}
        <Card {...projects[projectSelected]} />
      </div>
    </NormalContainer>
  );
}

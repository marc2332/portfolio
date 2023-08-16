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
    name: "📝 Freya Editor",
    link: "https://github.com/marc2332/freya-editor",
    description:
      "Cross-platform code editor made entirely in Rust using Freya.",
  },
  {
    name: " 🦑 ghboard",
    link: "https://github.com/marc2332/ghboard",
    description:
      "Github Dashboard entirely written in Rust with Dioxus SSR.",
  },
  {
    name: " 💻 Graviton Editor",
    link: "https://github.com/Graviton-Code-Editor/Graviton-App",
    description: "Cross-platform minimal code editor made in Rust using Tauri.",
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
          Web frontend ⚛️ developer but working on Rust projects 🦀 in my spare time.
          <br />
          I like to help and contribute to open source projects. I even have a few of my own, like <Link target="_blank" href="https://github.com/marc2332/freya">Freya</Link>, a native GUI library for Rust powered by Skia and Dioxus, or also <Link target="_blank" href="https://github.com/marc2332/freya-editor">freya-editor</Link>, a cross-platform code editor made using Freya.
        </p>
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
        <p>For more other projects see my <Link href="https://github.com/marc2332/">Github</Link>.</p>
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
          <li>
            <Link href="https://twitter.com/mkenzo_8">
              {"->"} Twitter
            </Link>
          </li>
        </ul>
      </div>
    </NormalContainer>
  );
}

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const PROJECTS = [
  {
    name: "Freya",
    logo: "/projects/logos/freya.svg",
    featured: true,
    repo: "marc2332/freya",
    description: "Cross-platform, native and declarative Rust GUI library.",
    subItems: [
      { name: "freya-core", description: "Component runtime, reactive primitives, UI tree diffing and async runtime." },
      { name: "Torin", description: "UI layout library." },
      { name: "Freya Radio", description: "Topic-based global state management." },
      { name: "Freya Query", description: "Reusable data state management." },
    ],
  },
  {
    name: "marcterm",
    logo: "/projects/logos/marcterm.png",
    repo: "marc2332/marcterm",
    description: "Terminal emulator written in Freya and Rust.",
  },
  {
    name: "Valin",
    logo: "/projects/logos/valin.svg",
    repo: "marc2332/valin",
    description: "Cross-platform code editor built with Freya and Rust.",
  },
  {
    name: "Andromeda",
    logo: "/projects/logos/andromeda.svg",
    repo: "tryandromeda/andromeda",
    description: "TypeScript and JavaScript runtime written in pure Rust.",
  },
  {
    name: "Graviton Editor",
    logo: "/projects/logos/graviton.png",
    repo: "Graviton-Code-Editor/Graviton-App",
    description: "Cross-platform code editor made with Tauri.",
  },
];

const POSTS = [
  { title: "Released Freya 0.4", info: "2026-07-16", url: "https://freyaui.dev/posts/0.4" },
  { title: "Released Freya 0.3", info: "2025-06-25", url: "https://freyaui.dev/posts/0.3" },
  { title: "OpenBank's useless 2FA check on movements history", info: "2024-12-29", url: "/posts/openbank_useless_2fa_movements_history" },
  { title: "Released Freya 0.2", info: "2024-05-14", url: "https://freyaui.dev/posts/0.2" },
  { title: "Announced Freya", info: "2023-09-02", url: "https://freyaui.dev/posts/announcement" },
];

export const getServerSideProps: GetServerSideProps<{ stars: number[] }> = async ({ res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=59");
  const stars = await Promise.all(PROJECTS.map(async (project) => {
    try {
      const token = process.env["GITHUB_TOKEN"];
      const response = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) return 0;
      const repo = await response.json();
      return typeof repo.stargazers_count === "number" ? repo.stargazers_count : 0;
    } catch {
      return 0;
    }
  }));
  return { props: { stars } };
};

function SpainClock() {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const updateTime = () => setTime(new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid", hour: "2-digit", minute: "2-digit", hour12: false,
    }).format(new Date()));
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);
  return <span>Spain, {time ?? "--:--"}</span>;
}

export default function Home({ stars }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main id="main">
      <Head>
        <title>Marc Espin</title>
        <meta name="description" content="Marc Espin. Fullstack and Systems Engineer interested in Rust, GUI development, open source and Nix." />
        <meta name="author" content="Marc Espin" />
        <link rel="canonical" href="https://mespin.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marc Espin" />
        <meta property="og:title" content="Marc Espin" />
        <meta property="og:description" content="Fullstack and Systems Engineer interested in Rust, GUI development, open source and Nix." />
        <meta property="og:url" content="https://mespin.me/" />
        <meta property="og:image" content="https://mespin.me/pfp.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="460" />
        <meta property="og:image:alt" content="Marc Espin" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@mkenzo_8" />
        <meta name="twitter:title" content="Marc Espin" />
        <meta name="twitter:description" content="Fullstack and Systems Engineer interested in Rust, GUI development, open source and Nix." />
        <meta name="twitter:image" content="https://mespin.me/pfp.png" />
        <meta name="twitter:image:alt" content="Marc Espin" />
      </Head>
      <section className="intro" aria-labelledby="intro-heading">
        <div className="intro-status"><SpainClock /></div>
        <div className="intro-heading-row">
          <h1 id="intro-heading">Fullstack and Systems Engineer</h1>
          <Image className="intro-avatar" src="/pfp.png" alt="Marc Espin" width={96} height={96} priority />
        </div>
        <div className="intro-copy">
          <p>I'm interested in systems programming, GUI development, <a href="#projects">open source</a> and Nix.</p>
        </div>
        <div className="social-links" aria-label="Find me online">
          <a href="https://github.com/marc2332">GitHub ↗</a>
          <a href="https://x.com/mkenzo_8">X ↗</a>
          <a href="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/">LinkedIn ↗</a>
          <a href="https://cal.com/marc-espin">Schedule a meeting ↗</a>
          <a href="mailto:marc@mespin.me">Email ↗</a>
        </div>
      </section>
      <section className="content-section" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading"><h2 id="projects-heading">Projects</h2></div>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} {...project} stars={stars[index]} url={`https://github.com/${project.repo}`} />
          ))}
        </div>
      </section>
      <section className="content-section" id="writing" aria-labelledby="writing-heading">
        <div className="section-heading"><h2 id="writing-heading">Posts</h2></div>
        <ul className="post-list">{POSTS.map((post) => <Card key={post.url} {...post} />)}</ul>
      </section>
      <section className="contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>For collaboration or sponsoring: <a href="mailto:marc@mespin.me">marc@mespin.me</a></p>
        <p><a href="https://cal.com/marc-espin">Schedule a meeting ↗</a></p>
      </section>
    </main>
  );
}

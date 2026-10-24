import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

const SITE_NAME = "Marc Espin";
const SITE_DESCRIPTION =
  "Fullstack and Systems Engineer interested in Rust, GUI development, open source and Nix.";
const SITE_URL = "https://mespin.me/";
const PREVIEW_IMAGE_URL = `${SITE_URL}pfp.png?v=2`;

const PROJECTS = [
  {
    name: "Freya",
    logo: "/projects/logos/freya.svg",
    featured: true,
    repo: "marc2332/freya",
    description: "Cross-platform, native and declarative Rust GUI library.",
    subItems: [
      {
        name: "freya-core",
        description:
          "Component runtime, reactive primitives, UI tree diffing and async runtime.",
      },
      { name: "Torin", description: "UI layout library." },
      {
        name: "Freya Radio",
        description: "Topic-based global state management.",
      },
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
  {
    title: "Sanctum, Linux DE made with Rust and Freya",
    info: "2026-10-24",
    url: "/posts/sanctum",
  },
  {
    title: "Released Freya 0.4",
    info: "2026-07-16",
    url: "https://freyaui.dev/posts/0.4",
  },
  {
    title: "Released Freya 0.3",
    info: "2025-06-25",
    url: "https://freyaui.dev/posts/0.3",
  },
  {
    title: "OpenBank's useless 2FA check on movements history",
    info: "2024-12-29",
    url: "/posts/openbank_useless_2fa_movements_history",
  },
  {
    title: "Released Freya 0.2",
    info: "2024-05-14",
    url: "https://freyaui.dev/posts/0.2",
  },
  {
    title: "Announced Freya",
    info: "2023-09-02",
    url: "https://freyaui.dev/posts/announcement",
  },
];

export const getServerSideProps: GetServerSideProps<{
  stars: number[];
}> = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=59",
  );

  const token = process.env["GITHUB_TOKEN"];
  const stars = await Promise.all(
    PROJECTS.map(async (project) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${project.repo}`,
          {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
            signal: AbortSignal.timeout(5000),
          },
        );

        if (!response.ok) return 0;

        const repo = await response.json();
        return typeof repo.stargazers_count === "number"
          ? repo.stargazers_count
          : 0;
      } catch {
        return 0;
      }
    }),
  );

  return { props: { stars } };
};

function SpainClock() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  return <span>Spain, {time ?? "--:--"}</span>;
}

export default function Home({
  stars,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main id="main">
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content={`${SITE_NAME}. ${SITE_DESCRIPTION}`}
        />
        <meta name="author" content={SITE_NAME} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={PREVIEW_IMAGE_URL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="460" />
        <meta property="og:image:alt" content={SITE_NAME} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@mkenzo_8" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={PREVIEW_IMAGE_URL} />
        <meta name="twitter:image:alt" content={SITE_NAME} />
      </Head>
      <section className="intro" aria-labelledby="intro-heading">
        <div className="intro-status">
          <SpainClock />
        </div>
        <div className="intro-body">
          <div className="intro-text">
            <h1 id="intro-heading">Fullstack and Systems Engineer</h1>
            <div className="intro-copy">
              <p>
                I'm interested in systems programming, GUI development,{" "}
                <a href="#projects">open source</a>, LLMs, Rust, Linux and Nix.
              </p>
            </div>
          </div>
          <Image
            className="intro-avatar"
            src="/pfp.png"
            alt={SITE_NAME}
            width={96}
            height={96}
            priority
          />
        </div>
        <div className="social-links" aria-label="Find me online">
          <a href="https://github.com/marc2332">GitHub ↗</a>
          <a href="https://x.com/mkenzo_8">X ↗</a>
          <a href="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/">
            LinkedIn ↗
          </a>
          <a href="https://cal.com/marc-espin">Schedule a meeting ↗</a>
          <a href="mailto:marc@mespin.me">Email ↗</a>
        </div>
      </section>
      <section
        className="content-section"
        id="projects"
        aria-labelledby="projects-heading"
      >
        <div className="section-heading">
          <h2 id="projects-heading">Projects</h2>
        </div>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              stars={stars[index]}
              url={`https://github.com/${project.repo}`}
            />
          ))}
        </div>
      </section>
      <section
        className="content-section"
        id="writing"
        aria-labelledby="writing-heading"
      >
        <div className="section-heading">
          <h2 id="writing-heading">Posts</h2>
        </div>
        <ul className="post-list">
          {POSTS.map((post) => (
            <li className="post-row" key={post.url}>
              <time dateTime={post.info}>{post.info}</time>
              <Link href={post.url}>
                {post.title} <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="content-section"
        id="work"
        aria-labelledby="work-heading"
      >
        <div className="section-heading">
          <h2 id="work-heading">Work</h2>
        </div>
        <ul className="post-list">
          <li className="post-row">
            <time dateTime="2022-08-17">2022-08-17</time>
            <span>Joined Boxfish Studio</span>
          </li>
          <li className="post-row">
            <time dateTime="2021-07-01">2021-07-01</time>
            <span>Joined ALBA Synchrotron as intern</span>
          </li>
        </ul>
      </section>
      <section className="contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact</h2>
        <p>
          For collaboration or sponsoring:{" "}
          <a href="mailto:marc@mespin.me">marc@mespin.me</a>
        </p>
        <p>
          <a href="https://cal.com/marc-espin">Schedule a meeting ↗</a>
        </p>
      </section>
    </main>
  );
}

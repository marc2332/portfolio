import Head from "next/head";
import React from "react";
import { Link } from "../components/Link";
import Card from "../components/Card";
import ProjectCard from "../components/ProjectCard";
import SocialLink from "../components/SocialLink";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMailbox, BsCalendar } from "react-icons/bs";
import Image from "next/image";
import PFP from "../public/pfp.png";
import FreyaImage from "../public/projects/freya.webp";
import MarctermImage from "../public/projects/marcterm.webp";
import ValinImage from "../public/projects/valin.webp";
import AndromedaImage from "../public/projects/andromeda.webp";
import GravitonImage from "../public/projects/graviton.webp";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

function normalizeTime(num: number): string {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num.toString();
  }
}

function timeInSpain(): string {
  const now = new Date();

  const dateFormat = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const dateParts = dateFormat.formatToParts(now);

  return `${normalizeTime(Number(dateParts[0].value))}:${dateParts[2].value}`;
}

const PROJECTS = [
  {
    name: "🦀 Freya",
    image: FreyaImage,
    featured: true,
    repo: "marc2332/freya",
    description: "Cross-platform, native and declarative Rust GUI library.",
    subItems: [
      {
        name: "⚡️ freya-core",
        description: "Components-based runtime system, reactive primitives, UI tree diffing and custom async runtime.",
      },
      {
        name: "🏗 Torin",
        description: "UI layout library.",
      },
      {
        name: "📻 Freya Radio",
        description: "Global state management based on topics subscription.",
      },
      {
        name: "🔍 Freya Query",
        description: "Reusable data state management library.",
      },
    ]
  },
  {
    name: "💻 marcterm",
    image: MarctermImage,
    repo: "marc2332/marcterm",
    description: "Terminal Emulator written in Freya and Rust.",
  },
  {
    name: "⚒️ Valin",
    image: ValinImage,
    repo: "marc2332/valin",
    description: "Cross-platform code editor written in Freya and Rust.",
  },
  {
    name: "⭐️ Andromeda",
    image: AndromedaImage,
    repo: "tryandromeda/andromeda",
    description: "Pure Rust TypeScript/JavaScript runtime.",
  },
  {
    name: "🚀 Graviton Editor",
    image: GravitonImage,
    repo: "Graviton-Code-Editor/Graviton-App",
    description: "Modern-looking cross-platform code editor made with Tauri.",
  },
];

export const getServerSideProps: GetServerSideProps<{
  stars: number[];
}> = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=59",
  );

  // Only fetch stars for projects that have a repo (not sub-items)
  const projectsWithRepos = PROJECTS.filter(project => project.repo);

  const stars = await Promise.all(projectsWithRepos.map(async (project) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${project.repo}`, {
        headers: {
          Authorization: `Bearer ${process.env["GITHUB_TOKEN"]}`,
        },
      });
      const repo = await res.json();
      return repo.stargazers_count;
    } catch (_) {
      return 0;
    }
  }));
  return { props: { stars } };
};

export default function Home(
  { stars }: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const nowInSpain = timeInSpain();
  return (
    <main>
      <Head>
        <meta name="description" content="Marc Espín's portfolio" />
        <title>Marc Espin</title>
      </Head>
      <div className="mb-8 sm:flex items-start gap-6">
        <div className="flex-1">
          <p className="leading-8 sm:leading-10 mb-4">
            Frontend 🖼️ developer but working on Rust 🦀 projects in my spare time.
            <br />
            I am interested in systems programming, GUI development, open source and Nix.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <SocialLink url="https://github.com/marc2332" title="My GitHub">
              <AiOutlineGithub size={20} />
              GitHub
            </SocialLink>
            <SocialLink url="https://x.com/mkenzo_8" title="My X">
              <FaXTwitter size={20} />
              X
            </SocialLink>
            <SocialLink
              url="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/"
              title="My LinkedIn"
            >
              <BiLogoLinkedin size={20} />
              LinkedIn
            </SocialLink>
            <SocialLink url="https://cal.com/marc-espin" title="Schedule a meeting">
              <BsCalendar size={18} />
              Meeting
            </SocialLink>
            <SocialLink url="mailto:marc@mespin.me" title="My email">
              <BsMailbox size={20} />
              Email
            </SocialLink>
            <span className="text-neutral-400" title="Time in Spain">
              {`${nowInSpain}`}
            </span>
          </div>
        </div>
        <Image
          className="rounded-full mx-auto mt-6 sm:-mt-8"
          alt="Profile Picture"
          height={130}
          width={130}
          src={PFP}
        />
      </div>
      <div className="mb-8">
        <p>
          Interested in collaborating or sponsoring? Send me an email to{" "}
          <Link href="mailto:marc@mespin.me">marc@mespin.me</Link>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4">Posts</h2>
        <Card
          title="Released Freya 0.4"
          info={new Date(2026, 6, 16).toDateString()}
          url="https://freyaui.dev/posts/0.4"
        />
        <Card
          title="Released Freya 0.3"
          info={new Date(2025, 5, 25).toDateString()}
          url="https://freyaui.dev/posts/0.3"
        />
        <Card
          title="OpenBank's useless 2FA check on movements history"
          info={new Date(2024, 11, 29).toDateString()}
          url="posts/openbank_useless_2fa_movements_history"
        />
        <Card
          title="Released Freya 0.2"
          info={new Date(2024, 4, 14).toDateString()}
          url="https://freyaui.dev/posts/0.2"
        />
        <Card
          title="Announced Freya"
          info={new Date(2023, 8, 2).toDateString()}
          url="https://freyaui.dev/posts/announcement"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4">Projects</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              image={project.image}
              stars={stars[index]}
              url={`https://github.com/${project.repo}`}
              featured={project.featured}
              subItems={project.subItems}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

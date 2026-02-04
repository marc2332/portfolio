import Head from "next/head";
import React from "react";
import { Link } from "../components/Link";
import Card from "../components/Card";
import CircularCard from "../components/CircularCard";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMailbox, BsCalendar } from "react-icons/bs";
import Image from "next/image";
import PFP from "../public/pfp.png";
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
    name: "Freya",
    repo: "marc2332/freya",
    description: "Cross-platform, native and declarative Rust GUI library.",
    subItems: [
      {
        name: "Torin",
        description: "UI layout library.",
        url: "https://github.com/marc2332/freya/tree/main/crates/torin"
      },
      {
        name: "Freya Core",
        description: "Components-based runtime system, reactive primitives and UI tree diffing.",
        url: "https://github.com/marc2332/freya/tree/main/crates/freya-core"
      },
      {
        name: "Freya Query",
        description: "Reusable data state management library.",
        url: "https://github.com/marc2332/freya/tree/main/crates/freya-query"
      },
      {
        name: "Freya Radio",
        description: "Global state management based on topics subscription.",
        url: "https://github.com/marc2332/freya/tree/main/crates/freya-radio"
      },
    ]
  },
  {
    name: "Valin",
    repo: "marc2332/valin",
    description: "Code editor made entirely in Rust using Freya.",
  },
  {
    name: "Andromeda",
    repo: "tryandromeda/andromeda",
    description: "Modern, fast, and secure JavaScript & TypeScript runtime.",
  },
  {
    name: "Graviton Editor",
    repo: "Graviton-Code-Editor/Graviton-App",
    description: "Minimal code editor made in Rust using Tauri.",
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
        <title>Marc Espín</title>
      </Head>
      <div className="mb-4 sm:flex">
        <div className="sm:w-38 sm:mr-2 flex gap-4 sm:gap-0 mb-4 sm:m-0 justify-center">
          <div className="sm:mr-4 sm:mt-10 flex flex-row sm:flex-col gap-4 sm:gap-0">
            <CircularCard url="https://github.com/marc2332" title="My GitHub">
              <AiOutlineGithub size={25} />
            </CircularCard>
            <CircularCard url="https://x.com/mkenzo_8" title="My X">
              <FaXTwitter size={25} />
            </CircularCard>
            <CircularCard url="https://cal.com/marc-espin" title="Schedule a meeting">
              <BsCalendar size={20} />
            </CircularCard>
          </div>
          <div className="mr-4 flex flex-row sm:flex-col gap-4 sm:gap-0">
            <CircularCard
              url="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/"
              title="My LinkedIn"
            >
              <BiLogoLinkedin size={25} />
            </CircularCard>
            <CircularCard url="mailto:marc@mespin.me" title="My email">
              <BsMailbox size={25} />
            </CircularCard>
            <CircularCard title="Time in Spain">
              {`${nowInSpain}`}
            </CircularCard>
          </div>
        </div>
        <p className="flex-1 leading-8 sm:leading-10 float-left mb-6 sm:mb-0">
          <Image
            className="rounded-full float-right"
            alt="Profile Picture"
            height={180}
            width={180}
            src={PFP}
          />
          Frontend 🖼️ developer but working on Rust 🦀 projects in my spare time.
          <br />
          I am interested in systems programming, GUI development and open source.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4 sm:ml-40">Posts</h2>
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
        <h2 className="text-2xl mb-4 sm:ml-40">Projects</h2>
        {(() => {
          let starIndex = 0;
          return PROJECTS.map((project) => {
            const currentStars = project.repo ? stars[starIndex++] : 0;
            return (
              <div key={project.name}>
                <Card
                  title={project.name}
                  description={project.description}
                  info={project.repo ? `${currentStars} stars ⭐` : ""}
                  url={project.repo ? `https://github.com/${project.repo}` : undefined}
                />
                {project.subItems && (
                  <div>
                    {project.subItems.map((subItem) => (
                      <Card
                        key={subItem.name}
                        title={subItem.name}
                        description={subItem.description}
                        info=""
                        url={subItem.url}
                        variant="sub"
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          });
        })()}
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4 sm:ml-40">Experience</h2>
        <Card
          title="Joined Boxfish Studio as Frontend Developer"
          info={new Date("08/17/2022").toDateString()}
        />
        <Card
          title="Joined ALBA Synchrotron as intern"
          info={new Date("07/01/2021").toDateString()}
        />
      </div>
    </main>
  );
}

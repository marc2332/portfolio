import Head from "next/head";
import React from "react";
import { Link } from "../components/Link";
import Card from "../components/Card";
import CircularCard from "../components/CircularCard";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
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
    description: "Cross-platform GUI library for Rust powered by Skia and Dioxus.",
  },
  {
    name: "dioxus-query",
    repo: "marc2332/dioxus-query",
    description: "State management for Dioxus apps.",
  },
  {
    name: "dioxus-radio",
    repo: "dioxus-community/dioxus-radio",
    description: "State management with topics for Dioxus.",
  },
  {
    name: "Valin",
    repo: "marc2332/valin",
    description: "Code editor made entirely in Rust using Freya.",
  },
  {
    name: "ghboard",
    repo: "marc2332/ghboard",
    description: "GitHub Dashboard made in Rust With Dioxus.",
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

  const stars = await Promise.all(PROJECTS.map(async (project) => {
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
          </div>
          <div className="mr-4 flex flex-row sm:flex-col gap-4 sm:gap-0">
            <CircularCard
              url="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/"
              title="My LinkedIn"
            >
              <BiLogoLinkedin size={25} />
            </CircularCard>
            <CircularCard url="mailto:mespinsanz@gmail.com" title="My email">
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
            height={160}
            width={160}
            src={PFP}
          />
          Frontend 🖼️ developer but working on Rust 🦀 projects in my spare time.
          <br />
          I like to help and contribute to open source projects. I even have a
          few of my own, like{" "}
          <Link href="https://github.com/marc2332/freya">
            Freya
          </Link>, a native GUI library for Rust powered by Skia and Dioxus, or
          also{" "}
          <Link href="https://github.com/marc2332/freya-editor">
            freya-editor
          </Link>, a cross-platform code editor made using Freya.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4 sm:ml-40">News</h2>
        <Card
          title="Announced Freya"
          info={new Date(2023, 8, 2).toDateString()}
          url="https://marc0.hashnode.dev/freya"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4 sm:ml-40">Projects</h2>
        {PROJECTS.map((project, i) => {
          return (
            <Card
              key={project.name}
              title={project.name}
              description={project.description}
              info={`${stars[i]} stars ⭐`}
              url={`https://github.com/${project.repo}`}
            />
          );
        })}
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

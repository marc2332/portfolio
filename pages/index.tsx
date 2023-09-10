import Head from "next/head";
import React from "react";
import { Link } from "../components/Link";
import Card from "../components/Card";
import CircularCard from "../components/CircularCard";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import Image from "next/image";
import PFP from "../public/pfp.png";

function timeInSpain(): Date {
  const date = new Date();

  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);

  // Spain is UTC+02:00
  const timeOffset = 2;

  return new Date(utcTime + (3600000 * timeOffset));
}

export default function Home() {
  const nowInSpain = timeInSpain();
  return (
    <>
      <Head>
        <title>Marc Espín</title>
      </Head>
      <div className="mb-4 sm:flex">
        <div className="sm:w-38 sm:mr-2 flex gap-4 sm:gap-0 mb-4 sm:m-0 justify-center">
          <div className="sm:mr-4 sm:mt-10 flex flex-row sm:flex-col gap-4 sm:gap-0">
            <CircularCard url="https://github.com/marc2332">
              <AiOutlineGithub size={25} />
            </CircularCard>
            <CircularCard url="https://twitter.com/mkenzo_8">
              <AiOutlineTwitter size={25} />
            </CircularCard>
          </div>
          <div className="mr-4 flex flex-row sm:flex-col gap-4 sm:gap-0">
            <CircularCard url="https://www.linkedin.com/in/marc-esp%C3%ADn-sanz-79575a187/">
              <BiLogoLinkedin size={25} />
            </CircularCard>
            <CircularCard url="mailto:mespinsanz@gmail.com">
              <BsMailbox size={25} />
            </CircularCard>
            <CircularCard>
              {`${nowInSpain.getHours()}:${nowInSpain.getMinutes()}`}
            </CircularCard>
          </div>
        </div>
        <p className="flex-1 leading-8 float-left mb-6">
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
          info={new Date().toDateString()}
          url="https://marc0.hashnode.dev/freya"
        />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl mb-4 sm:ml-40">Projects</h2>
        <Card
          title="Freya"
          description="Native GUI library for Rust powered by Skia and Dioxus."
          info={"643 stars ⭐"}
          url="https://github.com/marc2332/freya"
        />
        <Card
          title="dioxus-query"
          description="State management for Dioxus apps."
          info={"15 stars ⭐"}
          url="https://github.com/marc2332/dioxus-query"
        />
        <Card
          title="ghboard"
          description="GitHub Dashboard made in Rust With Dioxus."
          info={"45 stars ⭐"}
          url="https://github.com/marc2332/ghboard"
        />
        <Card
          title="Graviton Editor"
          description="Minimal code editor made in Rust using Tauri."
          info={"1077 stars ⭐"}
          url="https://github.com/Graviton-Code-Editor/Graviton-App"
        />
        <Card
          title="freya-editor"
          description="Code editor made entirely in Rust using Freya"
          info={"52 stars ⭐"}
          url="https://github.com/marc2332/freya-editr"
        />
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
    </>
  );
}

import Head from "next/head";
import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { ClassicContainer } from "../components/Containers";
import { UncoloredLink } from "../components/Link";

export default function Blog({ posts }) {
  return (
    <ClassicContainer>
      <Head>
        <title>Blog | Marc Espín</title>
      </Head>
      <div>
        <div>
          {posts.map(({ data: { title, date }, slug }) => {
            return (
              <div key={title}>
                <UncoloredLink href={`/blog/${slug}`}>
                  <div>
                    <h1>{title}</h1>
                    <i>{date}</i>
                  </div>
                </UncoloredLink>
              </div>
            );
          })}
        </div>
      </div>
    </ClassicContainer>
  );
}

export async function getStaticProps() {
  const paths = await getAllPosts();

  return {
    props: {
      posts: paths.reverse().map(({ params: { slug } }) => {
        let { data } = matter(
          fs.readFileSync(`${process.cwd()}/blog/${slug}.md`),
        );
        return { data, slug };
      }),
    },
  };
}

export async function getAllPosts() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "blog"));

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

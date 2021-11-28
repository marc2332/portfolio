import Head from 'next/head'
import useBlobity from 'blobity/lib/useBlobity';
import { WiderContainer, PostContainer } from '../../components/styles'
import { isMobile, MobileView } from 'react-device-detect';
import React, { useEffect, useState } from 'react';
import fs from 'fs'
import path from 'path'
import highlight from 'remark-highlight.js'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { styled } from '@stitches/react';
import 'highlight.js/styles/base16/gruvbox-dark-hard.css'


export default function Post({ title, content }) {
  return (
    <>
      <Head>
        <title>Blog | {title} | Marc Espín</title>
      </Head>
      <WiderContainer>
        <PostContainer>
          <h1>{title}</h1>
          <ReactMarkdown plugins={[highlight]}>{content}</ReactMarkdown>
        </PostContainer>
      </WiderContainer>

    </>

  )
}

export async function getStaticProps({ params: { slug } }) {
  const { content, data } = matter(fs.readFileSync(`${process.cwd()}/blog/${slug}.md`))

  return {
    props: {
      ...data,
      content
    }
  }
}


export async function getAllPosts() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "blog"))

  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getStaticPaths() {
  const paths = await getAllPosts()
  return {
    paths,
    fallback: false
  }
}

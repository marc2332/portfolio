import Head from 'next/head'
import React from 'react';
import fs from 'fs'
import path from 'path'
import highlight from 'remark-highlight.js'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import 'highlight.js/styles/base16/gruvbox-dark-hard.css'
import styles from '../../components/styles.module.css'

export default function Post({ content, data: { title, date } }) {
  return (
    <>
      <Head>
        <title>Blog | {title} | Marc Espín</title>
      </Head>
      <div className={styles.widerContainer}>
        <div className={styles.postContainer}>
          <h1>{title}</h1>
          <i>{date}</i>
          <br/>
          <br/>
          <ReactMarkdown plugins={[highlight]}>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const { content, data } = matter(fs.readFileSync(`${process.cwd()}/blog/${slug}.md`))

  return {
    props: {
      data,
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

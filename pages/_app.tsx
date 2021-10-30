import { styled } from '@stitches/react';
import Head from 'next/head';
import React from 'react';
import './global.css'

const Container = styled('div', {
  flex: '1',
  position: 'relative',
  height: '100%'
});

export default function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
      </Head>
    </Container>
  )
}
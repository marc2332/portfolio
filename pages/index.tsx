import Head from 'next/head'
import { Container, List, ListLink, SmallTitle, SubTitle, Text, TextLink, TextLinkAlternative } from '../components/styles'
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marc Espín</title>
      </Head>
      <Container>
        <div>
          <SubTitle>
            /about
          </SubTitle>
          <Text>
          I am a software developer who tries to learn new things every day. I have maintained (and still) different open source projects. At the moment I am digging into Rust 🦀, Flutter+Dart 🐦, Deno 🦕 and Python 🐍 😄, but also improving my JavaScript/TypeScript frontend/backend knowledge 💪. Cryptocurrencies and dapps 📝 interest me. 
          </Text>
          <SmallTitle>
            Contact
          </SmallTitle>
          <List>
            <ListLink>
              <TextLink target="_blank" href="https://github.com/marc2332">
                {'->'} GitHub
              </TextLink>
            </ListLink>
            <ListLink>
              <TextLink href="mailto:mespinsanz@gmail.com">
                {'->'} mespinsanz@gmail.com
              </TextLink>
            </ListLink>
          </List>

          <SmallTitle>
            Projects
          </SmallTitle>
          <List>
            <ListLink>
              <TextLinkAlternative target="_blank" href="https://github.com/Graviton-Code-Editor/Graviton-App"> {'->'} 💻 Graviton Editor</TextLinkAlternative>
            </ListLink>
            <ListLink>
              <TextLinkAlternative target="_blank" href="https://github.com/marc2332/sardana-jupyter"> {'->'} 💃 Sardana-Jupyter</TextLinkAlternative>
            </ListLink>
            <ListLink>
              <TextLinkAlternative target="_blank" href="https://github.com/marc2332/solana-mobile-wallet"> {'->'} 💳 Reactor Wallet for Solana</TextLinkAlternative>
            </ListLink>
            <ListLink>
              <TextLinkAlternative target="_blank" href="https://github.com/marc2332/rust_blockchain"> {'->'} 🦀 Rust blockchain network</TextLinkAlternative>
            </ListLink>
          </List>
        </div>
      </Container>
    </div>
  )
}

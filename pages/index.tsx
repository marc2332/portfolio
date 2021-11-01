import Head from 'next/head'
import useBlobity from 'blobity/lib/useBlobity';
import { Button, Container, InlineText, SubTitle, Title, AboutText, MobileMessage, UnorderedList } from '../components/styles'
import Background from '../components/background'
import { isMobile, MobileView } from 'react-device-detect';

export default function Home() {

  if (!isMobile) {
    // Only use Blobity in Desktop
    useBlobity({
      size: 35,
      zIndex: -99,
      opacity: 0.5,
    });
  }

  return (
    <div>
      <Head>
        <title>Marc Espín</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Background />
        <div>
          <div>
            <Title> Marc Espín </Title>
            <InlineText> Software developer</InlineText>
            <AboutText>
              I like decentralized apps, cryptos and to learn new things as much I can, everyday.
              I am currently digging into Rust 🦀, Flutter 🐦 and Python 🐍 😄
            </AboutText>
          </div>
          <Button href="https://github.com/marc2332">💻 GitHub</Button>
          <SubTitle>Projects</SubTitle>
          <div >
            <UnorderedList>
              <li><Button href="https://github.com/sardana-org/sardana-jupyter">💃 Sardana-Jupyter </Button></li>
              <li><Button href="https://github.com/marc2332/rust_blockchain">💻 Rust blockchain </Button></li>
              <li><Button href="https://github.com/marc2332/solana-mobile-wallet">💸 Solana Wallet </Button></li>
              <li><Button href="https://github.com/marc2332/ham">🧪 ham </Button></li>
              <li><Button href="https://github.com/Graviton-Code-Editor/Graviton-App">🚀 Graviton Editor </Button></li>
            </UnorderedList>
          </div>
          <SubTitle>Experience</SubTitle>
          <div>
            <Button href="https://www.albasynchrotron.es/en">🔬 ALBA Synchrotron Internship</Button>
          </div>
          <MobileView>
            <MobileMessage>I suggest you to open it in desktop. It looks better :)</MobileMessage>
          </MobileView>
        </div>
      </Container>
    </div>
  )
}

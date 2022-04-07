import Head from 'next/head'
import React, { useState } from 'react';
import Card from '../components/Card';
import Chip from '../components/Chip';
import ChipList from '../components/ChipList';
import styles from '../components/styles.module.css'

const projects = [
  {
    name: " 💻 Graviton Editor",
    link: "https://github.com/Graviton-Code-Editor/Graviton-App",
    description: "Cross-platform code editor designed with a simple and mimal GUI, it can run in Windows, MacOS, Linux or even any browser."
  },
  {
    name: " 🦕 Astrodon",
    link: "https://github.com/astrodon/astrodon",
    description: "Cross-platform desktop webview-based app framework for Deno, powered by Tauri. Designed to be as lightweight and as possible, while keeping all the goods that comes with Deno."
  },
  {
    name: "💳 Reactor Wallet for Solana",
    link: "https://github.com/marc2332/solana-mobile-wallet",
    description: "Experimental cross-platform wallet for Solana Blockchain made in Flutter, you can transfer and SOL, tokens or even NFTs. You can also create or scan Solana Pay QRs, you can watch over any wallet, useful if you don't want to import the seedphrase."
  },
  {
    name: "💃 Sardana-Jupyter",
    link: "https://github.com/marc2332/sardana-jupyter",
    description: "Integration of Sardana, a SCADA control system made in ALBA Synchrotron, into Jupyter Lab via a Jupyter Kernel, also supporting the rendering of plots with Plotly Dash."
  },
  {
    name: "📝 Vale",
    link: "https://github.com/marc2332/vale",
    description: "A simple static documentation generator, designed to be simple, beatiful and fast. Made in Deno, but you can use it for any other language. Inspired by Deno Manual and mdBook."
  },
  {
    name: "🦀 Experimental blockchain-based protocol",
    link: "https://github.com/marc2332/rust_blockchain",
    description: "Dummy and experimental blockchain-based descentralized protocol I made to learn more about rust, cryptography, blockchain and similar topics. It's definitely not functional and contains security holes, and bugs. It's not complete, it only served as experiment."
  }
]

export default function Home() {

  const [projectSelected, setSelectedProject] = useState(0);

  return (
    <div>
      <Head>
        <title>Marc Espín</title>
      </Head>
      <div className={styles.container}>
        <div>
          <h1 className={styles.subTitle}>
            /about
          </h1>
          <p className={styles.text}>
          I am a software developer who tries to learn new things every day. I have maintained (and still) different open source projects. At the moment I am digging into Rust 🦀, Flutter+Dart 🐦, Deno 🦕 and Python 🐍 😄, but also improving my JavaScript/TypeScript frontend/backend knowledge 💪. Cryptocurrencies and dapps 📝 interest me. 
          </p>
          <h3 className={styles.smallTitle}>
            Contact
          </h3>
          <ul className={styles.list}>
            <li className={styles.listLink}>
              <a className={styles.textLink} target="_blank" href="https://github.com/marc2332">
                {'->'} GitHub
              </a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.textLink} href="mailto:mespinsanz@gmail.com">
                {'->'} mespinsanz@gmail.com
              </a>
            </li>
          </ul>

          <h3 className={styles.smallTitle}>
            Projects
          </h3>
          <ChipList>
            {projects.map((project, projectIndex) => {
              return <Chip value={project.name} selected={projectSelected == projectIndex} onSelected={() => setSelectedProject(projectIndex)}/>
            })}
          </ChipList>
          <Card {...projects[projectSelected]}/>
        </div>
      </div>
    </div>
  )
}

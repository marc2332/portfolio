import Head from 'next/head'
import React from 'react';
import styles from '../components/styles.module.css'

export default function Home() {
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
          <ul className={styles.list}>
            <li className={styles.listLink}>
              <a className={styles.textLinkAlternative} target="_blank" href="https://github.com/Graviton-Code-Editor/Graviton-App"> {'->'} 💻 Graviton Editor</a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.textLinkAlternative} target="_blank" href="https://github.com/astrodon/astrodon"> {'->'} 🦕 Astrodon</a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.textLinkAlternative} target="_blank" href="https://github.com/marc2332/solana-mobile-wallet"> {'->'} 💳 Reactor Wallet for Solana</a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.textLinkAlternative} target="_blank" href="https://github.com/marc2332/sardana-jupyter"> {'->'} 💃 Sardana-Jupyter</a>
            </li>
            <li className={styles.listLink}>
              <a className={styles.textLinkAlternative} target="_blank" href="https://github.com/marc2332/rust_blockchain"> {'->'} 🦀 Rust blockchain-based protocol</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

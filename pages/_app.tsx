import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import PagesContainer from '../components/pages_container';
import SideBar from '../components/sidebar';
import { isMobile } from 'react-device-detect';
import './global.css'
import { AppContainer, MenuButton } from '../components/styles';
import Loader from '../components/loader';

export default function MyApp({ Component, pageProps }) {

  const [isMenuHidden, setMenu] = useState(true);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setMenu(false);
    }

    setTimeout(() => {
      setLoaded(true)
    }, 100)

  }, [])

  function toggleMenu() {
    setMenu(!isMenuHidden)
  }


  function getMenuButton(position: string) {
    return <MenuButton className={position} onClick={toggleMenu}>{isMenuHidden ? '->' : '<-'} menu</MenuButton>
  }

  return (
    <AppContainer>
      {isLoaded ? (
        <>
          <SideBar className={isMenuHidden && 'hidden'} onLinkTapped={() => isMobile && setMenu(true)} Button={() => getMenuButton('right')} />
          <PagesContainer className={!isMenuHidden && isMobile && 'hidden'}>
            {getMenuButton('left')}
            <Component {...pageProps} />
          </PagesContainer>
        </>
      ) : <Loader />}
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </AppContainer>
  )
}
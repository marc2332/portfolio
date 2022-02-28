import React, { useEffect, useState } from 'react';
import SideBar from '../components/sidebar';
import { isMobile } from 'react-device-detect';
import { AppContainer, MenuButton, PagesContainer } from '../components/styles';
import './global.css'

export default function MyApp({ Component, pageProps }) {

  const [isMenuHidden, setMenu] = useState(true);

  useEffect(() => {
    if (!isMobile) {
      setMenu(false);
    }
  }, [])

  function toggleMenu() {
    setMenu(!isMenuHidden)
  }

  return (
    <AppContainer>
      <SideBar
        className={isMenuHidden && 'hidden'}
        onLinkTapped={() => isMobile && setMenu(true)}
        Button={() => <MenuButton className="right" onClick={toggleMenu}>{'<-'} menu</MenuButton>}
      />
      <PagesContainer className={!isMenuHidden && isMobile && 'hidden'}>
        <MenuButton className="left" onClick={toggleMenu}>{isMenuHidden ? '->' : '<-'} menu</MenuButton>
        <Component {...pageProps} />
      </PagesContainer>
    </AppContainer>
  )
}
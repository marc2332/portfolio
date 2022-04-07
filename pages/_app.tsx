import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { isMobile } from 'react-device-detect';
import styles from '../components/styles.module.css'
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
    <div className={styles.appContainer}>
      <SideBar
        isMenuHidden={isMenuHidden}
        onLinkTapped={() => isMobile && setMenu(true)}
        Button={() => <button className={styles.menuButton + " " + styles.right} onClick={toggleMenu}>{'<-'} menu</button>}
      />
      <div className={styles.pagesContainer + " "+(!isMenuHidden && isMobile && styles.hidden )}>
        <button className={styles.menuButton + " " + styles.left} onClick={toggleMenu}>{isMenuHidden ? '->' : '<-'} menu</button>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
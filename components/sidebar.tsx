import React, { PropsWithChildren, ReactElement } from "react";
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";
import { isMobile } from "react-device-detect";
import sidebarStyles from './sidebar.module.css'
import styles from './styles.module.css'

function ActiveLink({ children, href, onClick }) {
    const router = useRouter()
    const isActive = href === '/' ? router.asPath === href : router.asPath.startsWith(href);

    return (
        <div className={sidebarStyles.sidebarLink +" "+ (isActive && sidebarStyles.active)} onClick={onClick}>
            <Link href={href}>{children}</Link>
        </div>
    )
}

interface SideBarOptions extends PropsWithChildren<any> {
    onLinkTapped: () => void,
    isMenuHidden: boolean,
    Button: () => ReactElement
}

export default function SideBar({ isMenuHidden, onLinkTapped, Button }: SideBarOptions) {
    return (
        <div className={sidebarStyles.sidebar + " "+(isMenuHidden ?  sidebarStyles.hidden : "")}>
            <div>
                {isMobile && <Button />}
                <h1 className={styles.title}>
                    Marc
                    Espín
                </h1>
                <ul>
                    <ActiveLink href="/" onClick={onLinkTapped}>
                        /about
                    </ActiveLink>
                    <ActiveLink href="/blog" onClick={onLinkTapped}>
                        /blog
                    </ActiveLink>
                </ul>
            </div>
        </div>
    )
}
import { keyframes, styled } from "@stitches/react";
import React, { PropsWithChildren } from "react";
import Link from 'next/link'
import { Title } from "./styles";
import { useRouter } from "next/dist/client/router";

export const slideIn = keyframes({
    from: {
        width: 0,
        marginLeft: -80
    },
    to: {
        width: 250,
        marginLeft: 0
    }
})

const SideBarContainer = styled('div', {
    background: '#282828',
    padding: 40,
    width: '250px',
    color: 'black',
    display: 'inline-block',
    fontWeight: 'bold',
    marginLeft: 0,
    overflow: 'hidden',
    '&:not(.hidden)':{
        animation: `${slideIn} ease-in-out 0.15s`,
    },
    '&.hidden':{
        transition: '0.15s ease-in-out',
        width: 0,
        marginLeft: -80
    }
});

function ActiveLink({ children, href, onClick }) {
    const router = useRouter()
    const isActive = href === '/' ?  router.asPath === href :  router.asPath.startsWith(href);

    return (
        <SideBarLink className={isActive && 'active'} onClick={onClick}>
            <Link href={href}>{children}</Link>
        </SideBarLink>
    )
}

const SideBarLink = styled('div', {
    fontSize: 20,
    margin: '7px 0px',
    whiteSpace: 'nowrap',
    ':hover': {
        textDecoration: 'underline'
    },
    '&.active > a': {
        paddingLeft: 0,
    },
    '&.active > a:before': {
        content: '->',
    },
    '& > a': {
        textDecoration: 'none',
        color: '#82B071',
        paddingLeft: 19,

    }
});

interface SideBarOptions extends PropsWithChildren<any> {
    onLinkTapped: () => void
}

export default function SideBar({ className, onLinkTapped }: SideBarOptions) {
    return (
        <SideBarContainer className={className}>
            <Title>
                Marc 
                Espín
            </Title>
            <ul>
                <ActiveLink href="/" onClick={onLinkTapped}>
                    /about
                </ActiveLink>
                <ActiveLink href="/blog" onClick={onLinkTapped}>
                    /blog
                </ActiveLink>
            </ul>
        </SideBarContainer>
    )
}
import { keyframes, styled } from "@stitches/react";
import React, { PropsWithChildren, ReactElement } from "react";
import Link from 'next/link'
import { Title } from "./styles";
import { useRouter } from "next/dist/client/router";
import { isMobile } from "react-device-detect";

export const slideIn = keyframes({
    from: {
        width: 0,
        transform: 'translateX(-80px)'
    },
    to: {
        width: '350px',
        '@media (max-width: 600px)': {
            width: '100%',
        },
        transform: 'translateX(0px)'
    }
})

const SideBarContainer = styled('div', {
    background: '#282828',
    width: '350px',
    '@media (max-width: 600px)': {
        width: '100%',
    },
    fontWeight: 'bold',
    marginLeft: 0,
    overflow: 'hidden',
    position: 'relative',
    transform: 'translateX(0px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    '&:not(.hidden)': {
        animation: `${slideIn} ease-in-out 0.15s`,
    },
    '&.hidden': {
        transition: '0.15s ease-in-out',
        display: 'flex',
        width: 0,
        transform: 'translateX(-80px)'
    },
    '& ul':{
        padding: 0
    },
    '& > div': {
        marginTop: 40,
        marginRight: 30
    }
});

function ActiveLink({ children, href, onClick }) {
    const router = useRouter()
    const isActive = href === '/' ? router.asPath === href : router.asPath.startsWith(href);

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
    onLinkTapped: () => void,
    Button: () => ReactElement
}

export default function SideBar({ className, onLinkTapped, Button }: SideBarOptions) {
    return (
        <SideBarContainer className={className}>
            <div>
                {isMobile && <Button />}
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
            </div>
        </SideBarContainer>
    )
}
import styled from "styled-components";
import NextLink from "next/link";

export const Link = styled(NextLink)`
    color: #cf412e;
`;

export const LinkGreenVariant = styled(NextLink)`
    color: #82b071;
`;

export const UncoloredLink = styled(NextLink)`
    color: #ddb071;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

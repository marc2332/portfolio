import styled from "styled-components";

export const ClassicContainer = styled.div`
    font-family: PT Serif;
    line-height: 1.5;
    pre > code {
        white-space: pre-wrap; 
        font-weight: bold;
        color: #E3CFB3;
    }
    & .post a {
        color: #cf412e;
    }
`;

export const NormalContainer = styled.div`
    line-height: 2;
`;

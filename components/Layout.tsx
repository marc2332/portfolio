import styled from "styled-components";

export const Layout = styled.div`
    margin: 0 auto;
    width: 50%;
    @media only screen and (max-width: 1300px) {
        width: 65%;
    }
    @media only screen and (max-width: 1000px) {
        width:  75%;
    }
    @media only screen and (max-width: 600px) {
        width:  85%;
        padding: 15px 15px 40px 15px;
    }
`;

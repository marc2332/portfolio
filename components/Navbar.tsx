import Link from "next/link";
import styled from "styled-components";

const NavBarLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: #82b071;
  &:hover {
    text-decoration: underline;
  }
`;

const NavBarContainer = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 25px 0px 0px 0px;
  }
  padding: 25px 10px;
  display: flex;
  justify-content: center;
`;

export function NavBar() {
  return (
    <NavBarContainer>
      <NavBarLink href="/">About</NavBarLink>
      <NavBarLink href="/blog">Blog</NavBarLink>
    </NavBarContainer>
  );
}

import Link from "next/link";
import styled from "styled-components";

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;

  a {
    font-weight: 900;
    color: ${props => props.theme.greenBlue};
    &:visited {
      color: ${props => props.theme.greenBlue};
    }
    &:hover {
      color: ${props => props.theme.pink};
    }
  }

  p {
    color: ${props => props.theme.pink};
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <Link href='/artists'>
        <a>artists</a>
      </Link>
      <p>||</p>
      <Link href='/exhibitions'>
        <a> exhibitions</a>
      </Link>
      <p>||</p>
      <Link href='/about'>
        <a>about</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;

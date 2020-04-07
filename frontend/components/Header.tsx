import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 0 0 2rem;
  border-bottom: ${props => props.theme.border};
  border-left: ${props => props.theme.border};

  h1 {
    font-weight: 900;
    color: ${props => props.theme.pink};
    margin-right: 2rem;
    a {
      color: ${props => props.theme.pink};
    }
  }
`;

const Circle = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 100%;
  background-color: ${props => props.theme.greenBlue};
  z-index: -100;
  position: fixed;
  top: 1rem;
  left: 15rem;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Link href='/'>
        <a>
          <h1>nick kochornswasdi gallery</h1>
          <Circle />
        </a>
      </Link>
      <Nav />
    </HeaderStyles>
  );
};

export default Header;

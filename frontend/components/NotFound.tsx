import styled from "styled-components";

const NotFoundStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin-top: 2rem;

  h2 {
    border: solid 2px ${props => props.theme.pink};
    height: 20rem;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NotFound = () => {
  return (
    <NotFoundStyles>
      <h2>not found</h2>
    </NotFoundStyles>
  );
};

export default NotFound;

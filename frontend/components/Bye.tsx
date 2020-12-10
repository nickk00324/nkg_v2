import styled from "styled-components";
import TitleCard from "./TitleCard";
import ContentStyles from "./styles/ContentStyles";

const ByeStyles = styled.div`
  padding-top: 20rem;
  height: 100vh;
  margin: 0 auto;

  @media only screen and (max-width: 1265px) {
    padding-top: 5rem;
  }

  .content {
    width: 90rem;
    padding: 4rem;

    @media only screen and (max-width: 1000px) {
      width: auto;
    }
  }
`;
const Bye = () => {
  return (
    <ContentStyles>
      <TitleCard text={"nothing"} onView={true} />
      <ByeStyles>
        <div className='content'>
          <p>
            nick kochornswasdi gallery will be permanently shutting down its
            bendix location. maybe it will turn into something like a traveling
            circus, or warped tour, who the fuck knows!
          </p>
          <p>bye!</p>
          <p>nick (of nick kochornswasdi gallery)</p>
        </div>
      </ByeStyles>
    </ContentStyles>
  );
};

export default Bye;

import styled from "styled-components";
import TitleCard from "./TitleCard";
import ContentStyles from "./styles/ContentStyles";

const CoronaStyles = styled.div`
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
const Corona = () => {
  return (
    <ContentStyles>
      <TitleCard text={"nothing"} onView={true} />
      <CoronaStyles>
        <div className='content'>
          <p>
            due to COVID-19, nick kochornswasdi gallery will be closed, so stay
            home, wash your hands, don't touch your face, take care of yourself,
            wear a cloth mask in public, and check back for more information on
            when we will be up and running again.
          </p>
          <p>love, your friend,</p>
          <p>nick (of nick kochornswasdi gallery)</p>
        </div>
      </CoronaStyles>
    </ContentStyles>
  );
};

export default Corona;

import styled from "styled-components";
import ContentStyles from "./styles/ContentStyles";
import TitleCard from "./TitleCard";

const AboutStyles = styled.div`
  max-width: 90rem;
  margin: 20rem auto 40rem auto;
  border-top: ${(props) => props.theme.border};

  @media only screen and (max-width: 1265px) {
    margin: 5rem auto 40rem auto;
  }

  .info {
    margin-top: 4rem;
    padding-bottom: 3rem;
    border-bottom: ${(props) => props.theme.border};

    p {
      line-height: 2rem;
      margin: 0;
    }
  }
`;
const About = () => {
  return (
    <ContentStyles>
      <TitleCard text={"about"} />
      <AboutStyles>
        <p>
          nick kochornswasdi gallery was founded in 2019 by Nick Kochornswasdi
          while he was attending the California Institute of the Arts. From its
          humble beginnings, starting in his studio, to its current location in
          the Bendix Building, nick kochornswasdi gallery seeks to push the
          boundaries of artmaking by working with cutting-edge emerging artists
          while also considering the gallery itself as a concept to be critiqued
          and challenged.
        </p>
        <div className='info'>
          <p>213.437.3951</p>
          <p>gallery open by appointment only</p>
          <a href='mailto:info@nickkochornswasdigallery.com'>
            info@nickkochornswasdigallery.com
          </a>
        </div>
      </AboutStyles>
    </ContentStyles>
  );
};

export default About;

import styled from "styled-components";
import Head from "next/head";
import ContentStyles from "./styles/ContentStyles";
import TitleCard from "./TitleCard";

const ResidencyStyles = styled.div`
  max-width: 90rem;
  margin: 20rem auto 40rem auto;
  border-top: ${(props) => props.theme.border};

  @media only screen and (max-width: 1265px) {
    margin: 5rem auto 40rem auto;
  }

  p {
    line-height: 2rem;
    margin: 0;
    padding-top: 2rem;

    @media only screen and (max-width: 960px) {
      padding-right: 1rem;
    }
  }
`;
const Residency = () => {
  return (
    <ContentStyles>
      <Head>
        <meta
          name='description'
          content={`An art residency created to explore the current moment in american life and provide new ways of experiencing art in the post COVID-19 world`}
        />
        <title>A Real Residency by nkg</title>
      </Head>
      <TitleCard
        text={"nick kochornswasdi gallery presents: A Real Residency"}
      />
      <ResidencyStyles>
        <Resident />
      </ResidencyStyles>
    </ContentStyles>
  );
};

const ResidencyDescription = () => {
  return (
    <>
      <p>
        nick kochornswasdi gallery is pleased to announce the inaugural edition
        of “nick kochornswasdi gallery presents: A Real Residency”. The
        residency was created to give artists a space of ever expanding
        possibility, a space that seeks to challenge the increasingly insular
        thinking of others who wish to define the virtual as a set of photos in
        a slideshow, the same people who wish to define the internet and the
        virtual as a cheap imitation of the true and physical, to recreate the
        same power structures that crush possibility and only exist to entrench
        the power of the terrified minority elite.
      </p>
      <p>
        The residency seeks artists working in a radically non-materialist
        realm, ones who do not discriminate between physical and non-physical
        material because they realize that doing so only recreates the same
        system that allows difference to be destroyed in the service of capital
        status exchange, the artists that seek to expand the concept of art and
        artmaking in the 21st century, the ones who realize the internet was
        created over 30 years ago, and 30 years is a long fucking time.
      </p>
      <p>
        Artists participating in the residency will have the support of the
        gallery and access to gallery resources to bring their ideas to fruition
        and will result in the presentation of work, at the artist’s discretion.
      </p>
      <p>
        The duration of the residency is variable and based on the length of
        time necessary to finish the project.{" "}
      </p>
      <p>
        Please send an email to{" "}
        <a href='mailto:nick@nickkochornswasdigallery.com'>
          nick@nickkochornswasdigallery.com
        </a>{" "}
        with your proposal. Applicants will be selected on a rolling basis.
      </p>
    </>
  );
};

const Resident = () => {
  return (
    <p>
      Check out inaugural resident, the artist Hea-Mi Kim's work "self isolation
      diary" <a href='/journal_final.pdf'>here</a>.
    </p>
  );
};

export default Residency;

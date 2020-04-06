import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "next/link";
import classNames from "classnames";
import NotFound from "./NotFound";
import TitleCard from "./TitleCard";
import ContentStyles from "./styles/ContentStyles";
import formatDate from "../lib/formatDate";
import ImageViewer from "./ImageViewer";
import Loading from "./Loading";
import KeepHeight from "./styles/KeepHeight";

const SINGLE_EXHIBITION_QUERY = gql`
  query SINGLE_EXHIBITION_QUERY($name: String!) {
    exhibition(where: { url: $name }) {
      title
      artist {
        name
      }
      startDate
      endDate
      pressRelease
      promoImage
      showImages
      thumbnail
      url
    }
  }
`;

type ExhibitionProps = {
  name: string;
  location: string;
};

const ExhibitionStyles = styled.div`
  flex: 1;
  justify-content: center;
  .image-viewer {
    margin-bottom: ${props => props.theme.marginFromFooter};
  }
`;

const Exhibition = (props: ExhibitionProps) => {
  return (
    <ContentStyles>
      <Query query={SINGLE_EXHIBITION_QUERY} variables={{ name: props.name }}>
        {({ data, loading, error }: any) => {
          if (loading)
            return (
              <KeepHeight>
                <Loading />
              </KeepHeight>
            );
          if (error)
            return (
              <KeepHeight>
                <TitleCard text={"ERROR"} />
              </KeepHeight>
            );
          const ex = data.exhibition;
          console.log(ex.showImages.length);
          return (
            <>
              {!ex ||
                (ex.showImages.length === 0 && (
                  <>
                    <TitleCard text={"???"} />
                    <NotFound />
                  </>
                ))}
              {ex && ex.showImages.length !== 0 && (
                <>
                  <TitleCard
                    text={ex.title}
                    subtitle={ex.artist.name}
                    date={`${formatDate(ex.startDate)} - ${formatDate(
                      ex.endDate,
                      true
                    )}`}
                  />
                  <ExhibitionStyles>
                    <ExhibitionNav url={ex.url} selected={props.location} />
                    {props.location === "pr" && (
                      <PressRelease
                        title={ex.title}
                        promoImage={ex.promoImage}
                        pressRelease={ex.pressRelease}
                      />
                    )}
                    {props.location === "images" && (
                      <div className='image-viewer'>
                        <ImageViewer images={ex.showImages} />
                      </div>
                    )}
                  </ExhibitionStyles>
                </>
              )}
            </>
          );
        }}
      </Query>
    </ContentStyles>
  );
};

const ExhibitionNavStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: ${props => props.theme.border};
  width: 30rem;
  margin-bottom: 2rem;
  justify-self: flex-start;
  a {
    padding: 1rem;
    margin: 0;
    border-right: ${props => props.theme.border};
    text-align: center;
  }
  .isSelected {
    color: ${props => props.theme.pink};
  }
`;

type ExhibitionNavProps = {
  url: string;
  selected: string;
};

const ExhibitionNav = (props: ExhibitionNavProps) => {
  return (
    <ExhibitionNavStyles>
      <Link href={`/exhibitions/${props.url}/images`}>
        <a className={classNames({ isSelected: props.selected === "images" })}>
          images
        </a>
      </Link>
      <Link href={`/exhibitions/${props.url}/press-release`}>
        <a className={classNames({ isSelected: props.selected === "pr" })}>
          press release
        </a>
      </Link>
    </ExhibitionNavStyles>
  );
};

type PressReleaseProps = {
  title: string;
  promoImage: string;
  pressRelease: string[];
};

const PressReleaseStyles = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  flex-wrap: wrap;

  .header-img {
    text-align: center;
    height: 50rem;
    @media only screen and (max-width: 600px) {
      height: 30rem;
    }
    img {
      width: 50rem;
      margin: 0 2rem;
      @media only screen and (max-width: 600px) {
        width: 30rem;
      }
    }
  }

  .text {
    margin-top: 5rem;
    margin-bottom: ${props => props.theme.marginFromFooter};
    p {
      padding: 0 7rem;

      @media only screen and (max-width: 460px) {
        padding: 0 2rem;
      }
    }
  }
`;

const PressRelease = (props: PressReleaseProps) => {
  return (
    <PressReleaseStyles>
      <div className='header-img'>
        <img src={props.promoImage} alt={props.title} />
      </div>
      <div className='text'>
        {props.pressRelease.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </PressReleaseStyles>
  );
};

export default Exhibition;

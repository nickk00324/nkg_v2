import * as React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TitleCard from "./TitleCard";
import ContentStyles from "./styles/ContentStyles";
import { nameURLunFormatter } from "../lib/nameURLunFormatter";
import NotFound from "./NotFound";
import Loading from "./Loading";
import ImageViewer from "./ImageViewer";
import KeepHeight from "./styles/KeepHeight";

const SINGLE_ARTIST_QUERY = gql`
  query SINGLE_ARTIST_QUERY($name: String!) {
    artists(where: { name: $name }) {
      name
      id
      bio
      exhibitions {
        title
        thumbnail
        startDate
        endDate
        showImages
      }
    }
  }
`;

type ArtistProps = {
  name: string;
};

const ArtistStyles = styled.div`
  margin: 0 auto;
  .image-viewer {
    margin-bottom: ${props => props.theme.marginFromFooter};
  }

  .container {
    width: 100rem;

    @media only screen and (max-width: 1200px) {
      width: auto;
    }
  }
`;

class Artist extends React.Component<ArtistProps> {
  render() {
    return (
      <ContentStyles>
        <Query
          query={SINGLE_ARTIST_QUERY}
          variables={{ name: nameURLunFormatter(this.props.name) }}
        >
          {({ data, loading, error }: any) => {
            if (loading)
              return (
                <KeepHeight>
                  <Loading />
                </KeepHeight>
              );
            if (error) return <p>{error.message}</p>;
            const artist = data.artists[0];
            let images: string[] = [];
            if (artist) {
              artist.exhibitions.forEach((e: any) => {
                images = images.concat(e.showImages);
              });
            }
            return (
              <>
                {artist ? (
                  <>
                    <TitleCard text={artist.name} />
                    <ArtistStyles>
                      <div className='container'>
                        <Bio bio={artist.bio} />
                        <div className='image-viewer'>
                          <ImageViewer images={images} />
                        </div>
                      </div>
                    </ArtistStyles>
                  </>
                ) : (
                  <>
                    <TitleCard text={"???"} />
                    <NotFound />
                  </>
                )}
              </>
            );
          }}
        </Query>
      </ContentStyles>
    );
  }
}

type BioProps = {
  bio: string[];
};

const BioStyles = styled.div`
  max-width: 90rem;
  padding: 0 2rem;
  margin: 5rem auto;
`;

const Bio = (props: BioProps) => {
  return (
    <BioStyles>
      {props.bio.map((p: string, i: number) => (
        <p key={i}>{p}</p>
      ))}
    </BioStyles>
  );
};

export default Artist;

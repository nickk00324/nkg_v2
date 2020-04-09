import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { nameURLFormatter } from "../lib/nameURLFormatter";
import TitleCard from "./TitleCard";
import ContentStyles from "./styles/ContentStyles";
import Loading from "./Loading";
import KeepHeight from "./styles/KeepHeight";

const GET_ALL_ARTISTS_QUERY = gql`
  query GET_ALL_ARTISTS_QUERY {
    artists {
      id
      name
    }
  }
`;

const ArtistsStyles = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-top: 30rem;
  margin-bottom: 60rem;

  @media only screen and (max-width: 665px) {
    margin-top: 10rem;
    height: auto;
    margin-bottom: 30rem;
  }
  ul {
    list-style: none;
    padding: 0;
    min-width: 30rem;
    text-align: center;
    li {
      padding: 1rem 0;
    }
  }
`;

type EachArtist = {
  id: string;
  name: string;
};

type ArtistsProps = {
  name?: string;
};

class Artists extends React.Component<ArtistsProps> {
  render() {
    const { name } = this.props;
    return (
      <ContentStyles>
        <Query query={GET_ALL_ARTISTS_QUERY}>
          {({ data, loading }: any) => {
            if (loading)
              return (
                <KeepHeight>
                  <Loading />
                </KeepHeight>
              );
            //XD
            const artists = data.artists.filter(
              (artist: any) => artist.name === "nick kochornswasdi"
            );
            return (
              <>
                <TitleCard text={"artists"} />
                <ArtistsStyles>
                  <ul>
                    {artists.map((artist: EachArtist, i: number) => (
                      <li key={i}>
                        <Link
                          href={`/artists/${nameURLFormatter(artist.name)}`}
                        >
                          <a>{artist.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ArtistsStyles>
              </>
            );
          }}
        </Query>
      </ContentStyles>
    );
  }
}

export default Artists;

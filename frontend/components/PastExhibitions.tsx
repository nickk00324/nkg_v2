import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Link from "next/link";
import Info from "./Info";

const PAST_EXHIBITIONS_QUERY = gql`
  query PAST_EXHIBITIONS_QUERY($date: DateTime!) {
    exhibitions(where: { endDate_lte: $date }, orderBy: startDate_DESC) {
      title
      startDate
      endDate
      artist {
        name
      }
      thumbnail
      url
    }
  }
`;

type PastExhibitionsProps = {};

const PastExhibitionsGrid = styled.div`
  display: grid;
  padding: 2rem;
  border-bottom: ${props => props.theme.border};
  border-left: ${props => props.theme.border};
  margin: 2rem;
  margin-bottom: 30rem;
  justify-items: center;
  grid-gap: 2rem;
  width: 75%;
  max-height: 70rem;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: scroll;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    min-width: 500px;
    padding-right: 0;
  }

  @media only screen and (max-width: 615px) {
    grid-template-columns: 1fr;
    min-width: 300px;
    margin: 2rem auto 20rem auto;
  }

  @media only screen and (max-width: 420px) {
    min-width: 250px;
  }
`;

const MessageStyles = styled.p`
  padding: 2rem 0 0 2rem;
  margin-top: 30rem;
  margin-bottom: ${props => props.theme.marginFromFooter};
  border-top: ${props => props.theme.border};
  border-left: ${props => props.theme.border};
`;

const PastExhibitions = (props: PastExhibitionsProps) => {
  return (
    <Query query={PAST_EXHIBITIONS_QUERY} variables={{ date: new Date() }}>
      {({ data, loading, error }: any) => {
        if (loading)
          return <MessageStyles>let me find that for you</MessageStyles>;
        if (error)
          return <MessageStyles>whoops something's wrong</MessageStyles>;
        return (
          <PastExhibitionsGrid>
            {data.exhibitions.map((e: any) => (
              <ExhibitionCard
                title={e.title}
                artist={e.artist.name}
                startDate={e.startDate}
                endDate={e.endDate}
                thumbnail={e.thumbnail}
                url={e.url}
              />
            ))}
          </PastExhibitionsGrid>
        );
      }}
    </Query>
  );
};

const ExhibitionCardStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;

  img {
    flex-basis: 100%;
    width: 200px;
  }
`;

type ExhibitionCardProps = {
  title: string;
  artist: string;
  startDate: string;
  endDate: string;
  thumbnail: string;
  url: string;
};

const ExhibitionCard = (props: ExhibitionCardProps) => {
  return (
    <ExhibitionCardStyles>
      <Link href={`/exhibitions/${props.url}`}>
        <a>
          <img src={props.thumbnail} alt={props.title} />
          <div className='info'>
            <Info
              artist={props.artist}
              title={props.title}
              startDate={props.startDate}
              endDate={props.endDate}
              onPastPage={true}
            />
          </div>
        </a>
      </Link>
    </ExhibitionCardStyles>
  );
};

export default PastExhibitions;

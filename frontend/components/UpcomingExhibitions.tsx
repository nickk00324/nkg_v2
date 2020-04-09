import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Info from "./Info";

const UPCOMING_EXHIBITIONS_QUERY = gql`
  query UPCOMING_EXHIBITIONS_QUERY($date: DateTime!) {
    exhibitions(where: { OR: [{ startDate_gt: $date }, { startDate: null }] }) {
      id
      title
      artist {
        name
      }
      startDate
      endDate
    }
  }
`;

const UpcomingExhibitionStyles = styled.div`
  display: flex;
  margin-top: 20rem;
  max-width: 90rem;
  margin-bottom: ${props => props.theme.marginFromFooter};
  @media only screen and (max-width: 735px) {
    margin-top: 5rem;
  }
`;

const MessageStyles = styled.p`
  border-top: ${props => props.theme.border};
  padding: 2rem 2rem 0 0;
  border-right: ${props => props.theme.border};
  margin: 0 2rem 30rem 2rem;
`;

const UpcomingList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20rem;
  list-style: none;
  padding: 0;
  margin: 0 2rem;
  margin-bottom: ${props => props.theme.marginFromFooter};

  @media only screen and (max-width: 1200px) {
    grid-gap: 5rem;
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }

  li {
    border-bottom: ${props => props.theme.border};
    padding-bottom: 2rem;
    border-right: ${props => props.theme.border};
    padding-right: 2rem;

    p {
      padding: 0;
      margin: 0.5rem 0;
    }
  }
`;

type UpcomingExhibitionsProps = {};

const UpcomingExhibitions = (props: UpcomingExhibitionsProps) => {
  const today = new Date();
  return (
    <UpcomingExhibitionStyles>
      <Query query={UPCOMING_EXHIBITIONS_QUERY} variables={{ date: today }}>
        {({ data, loading, error }: any) => {
          if (loading) return <MessageStyles>fetching, hold up</MessageStyles>;
          if (error)
            return <MessageStyles>well, something went wrong :p</MessageStyles>;
          const upcoming = data.exhibitions;
          if (upcoming.length === 0) {
            return (
              <MessageStyles>
                so there's nothing i'm ready to announce yet but check back
                later because something is definitely coming
              </MessageStyles>
            );
          }
          return (
            <UpcomingList>
              {upcoming.map((e: any) => (
                <li key={e.id}>
                  <Info
                    artist={e.artist.name}
                    title={e.title}
                    startDate={e.startDate}
                    endDate={e.endDate}
                    onPastPage={false}
                  />
                </li>
              ))}
            </UpcomingList>
          );
        }}
      </Query>
    </UpcomingExhibitionStyles>
  );
};

export default UpcomingExhibitions;

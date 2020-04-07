import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Info from "./Info";

const UPCOMING_EXHIBITIONS_QUERY = gql`
  query UPCOMING_EXHIBITIONS_QUERY {
    exhibitions(orderBy: startDate_DESC, first: 2) {
      id
      title
      startDate
      endDate
      artist {
        name
        exhibitions {
          id
        }
      }
    }
  }
`;

const UpcomingExhibitionStyles = styled.div`
  display: flex;
  margin-top: 20rem;
  max-width: 90rem;
  margin-bottom: ${props => props.theme.marginFromFooter};
  @media only screen and (max-width: 600px) {
    margin-top: 5rem;
  }
`;

const MessageStyles = styled.p`
  border-top: ${props => props.theme.border};
  padding: 2rem 2rem 0 0;
  border-right: ${props => props.theme.border};
  margin: 0 2rem ${props => props.theme.marginFromFooter} 2rem;
`;

const UpcomingList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20rem;
  list-style: none;
  padding: 0;
  margin: 0 2rem;

  @media only screen and (max-width: 1200px) {
    grid-gap: 5rem;
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 600px) {
    display: block;
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
  const isUpcoming = (date: string) => {
    const today = new Date();
    const startDate = new Date(date);
    return today < startDate;
  };
  return (
    <UpcomingExhibitionStyles>
      <Query query={UPCOMING_EXHIBITIONS_QUERY}>
        {({ data, loading, error }: any) => {
          if (loading) return <MessageStyles>fetching, hold up</MessageStyles>;
          if (error)
            return <MessageStyles>well, something went wrong :p</MessageStyles>;
          const upcoming = data.exhibitions
            .filter((e: any) => isUpcoming(e.startDate))
            .reverse();
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

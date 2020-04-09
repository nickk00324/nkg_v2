import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import classNames from "classnames";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TitleCard from "./TitleCard";
import UpcomingExhibitions from "./UpcomingExhibitions";
import PastExhibitions from "./PastExhibitions";
import Info from "./Info";

export const CURRENT_EXHIBITION_QUERY = gql`
  query CURRENT_EXHIBITION_QUERY($date: DateTime!) {
    exhibitions(where: { startDate_lte: $date, endDate_gte: $date }) {
      title
      artist {
        name
      }
      startDate
      endDate
      promoImage
      url
    }
  }
`;

const ExhibitionsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-right: ${props => props.theme.border};
  padding-bottom: ${props => props.theme.marginFromFooter};

  @media only screen and (max-width: 906px) {
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  flex: 1;
`;

type ExhibitionsProps = {
  type: string;
};

class Exhibitions extends React.Component<ExhibitionsProps> {
  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  render() {
    return (
      <ExhibitionsStyles>
        {this.props.type === "current" ? (
          <TitleCard text={"exhibitions"} />
        ) : (
          <TitleCard text={`${this.props.type} exhibitions`} />
        )}
        <Content>
          <ExhibitionsNav selected={this.props.type} />
          {this.props.type === "current" && <CurrentExhibition />}
          {this.props.type === "upcoming" && <UpcomingExhibitions />}
          {this.props.type === "past" && <PastExhibitions />}
        </Content>
      </ExhibitionsStyles>
    );
  }
}

const ExhibitionsNavStyles = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  height: 5rem;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: ${props => props.theme.border};

  p {
    color: ${props => props.theme.pink};
  }

  li {
    padding: 0 2rem;

    @media only screen and (max-width: 420px) {
      padding: 0;
    }
  }

  .selected {
    color: ${props => props.theme.pink};
  }
`;

type ExhibitionsNavProps = {
  selected: string;
};

const ExhibitionsNav = (props: ExhibitionsNavProps) => {
  return (
    <ExhibitionsNavStyles>
      <li>
        <Link href='/exhibitions'>
          <a className={classNames({ selected: props.selected === "current" })}>
            current
          </a>
        </Link>
      </li>
      <li>
        <p>||</p>
      </li>
      <li>
        <Link href='/exhibitions/upcoming'>
          <a
            className={classNames({ selected: props.selected === "upcoming" })}
          >
            upcoming
          </a>
        </Link>
      </li>
      <li>
        <p>||</p>
      </li>
      <li>
        <Link href='/exhibitions/past'>
          <a className={classNames({ selected: props.selected === "past" })}>
            past
          </a>
        </Link>
      </li>
    </ExhibitionsNavStyles>
  );
};

type CurrentExhibitionProps = {};

const CurrentExhibitionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50rem;
  border-bottom: ${props => props.theme.border};
  margin: 5rem 2rem;
  margin-bottom: 30rem;

  @media only screen and (max-width: 620px) {
    width: 30rem;

    img {
      width: 30rem;
    }
  }

  .image {
    flex-basis: 100%;
    width: 50rem;

    @media only screen and (max-width: 620px) {
      width: 30rem;
    }
  }

  .info {
    border-left: ${props => props.theme.border};
  }
`;

const MessageStyles = styled.p`
  margin-top: 30rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 0;
  border-left: ${props => props.theme.border};

  @media only screen and (max-width: 910px) {
    margin-top: 3rem;
  }
`;

const CurrentExhibition = (props: CurrentExhibitionProps) => {
  const today = new Date();
  return (
    <CurrentExhibitionStyles>
      <Query query={CURRENT_EXHIBITION_QUERY} variables={{ date: today }}>
        {({ data, loading, error }: any) => {
          if (loading)
            return <MessageStyles>looking, hold your horses</MessageStyles>;
          if (error) {
            console.log(error);
            return <MessageStyles>well something went wrong</MessageStyles>;
          }
          const exhibition = data.exhibitions[0];
          return (
            <>
              {exhibition ? (
                <Link href={`/exhibitions/${exhibition.url}`}>
                  <a>
                    <div className='image'>
                      <img
                        width='500px'
                        src={exhibition.promoImage}
                        alt={exhibition.title}
                      />
                    </div>
                    <div className='info'>
                      <Info
                        artist={exhibition.artist.name}
                        title={exhibition.title}
                        startDate={exhibition.startDate}
                        endDate={exhibition.endDate}
                      />
                    </div>
                  </a>
                </Link>
              ) : (
                <MessageStyles>
                  nothing currently because of COVID-19, sorry, but check back
                  in the future i'm sure ill figure something out
                </MessageStyles>
              )}
            </>
          );
        }}
      </Query>
    </CurrentExhibitionStyles>
  );
};

export default Exhibitions;

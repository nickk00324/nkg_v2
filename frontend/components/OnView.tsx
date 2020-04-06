import * as React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import Link from "next/link";
import TitleCard from "./TitleCard";
import ContentStyles from "./styles/ContentStyles";
import { CURRENT_EXHIBITION_QUERY } from "./Exhibitions";
import formatDate from "../lib/formatDate";
import KeepHeight from "./styles/KeepHeight";
import Loading from "./Loading";

const OnViewStyles = styled.div`
  margin: 7rem auto ${props => props.theme.marginFromFooter} auto;
  max-width: 60rem;
  height: 100vh;
  img {
    width: 60rem;
  }

  @media only screen and (max-width: 1020px) {
    padding: 0 2rem;
    img {
      width: 40rem;
    }
  }
  @media only screen and (max-width: 805px) {
    height: auto;
  }
  @media only screen and (max-width: 520px) {
    padding: 0;
    img {
      width: 30rem;
    }
  }
`;

class OnView extends React.Component {
  render() {
    const today = new Date();
    return (
      <ContentStyles>
        <Query query={CURRENT_EXHIBITION_QUERY} variables={{ date: today }}>
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
                  <TitleCard text={"something went wrong"} />
                </KeepHeight>
              );
            const ex = data.exhibitions[0];
            let date = "";
            if (ex)
              date = `${formatDate(ex.startDate)} - ${formatDate(
                ex.endDate,
                true
              )}`;
            return (
              <>
                {!ex ? (
                  <>
                    <TitleCard text={"nothing"} onView={true} />
                    <OnViewStyles>
                      <div className='nothing'>
                        <p>
                          i guess there's nothing at the moment? check back
                          later ¯\_(ツ)_/¯
                        </p>
                      </div>
                    </OnViewStyles>
                  </>
                ) : (
                  <>
                    <TitleCard
                      text={ex.title}
                      subtitle={ex.artist.name}
                      date={date}
                      onView={true}
                      url={ex.url}
                    />
                    <OnViewStyles>
                      <Link href={`/exhibitions/${ex.url}`}>
                        <a>
                          <img src={ex.promoImage} alt={ex.title} />
                        </a>
                      </Link>
                    </OnViewStyles>
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

export default OnView;

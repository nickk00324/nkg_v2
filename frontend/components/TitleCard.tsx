import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

type TitleCardProps = {
  text: string;
  subtitle?: string;
  date?: string;
  onView?: boolean;
  url?: string;
};

const TitleCardStyles = styled.div`
  height: 30rem;
  min-width: 30rem;
  max-width: 30rem;
  border-bottom: ${(props) => props.theme.border};
  border-right: ${(props) => props.theme.border};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h2 {
    color: ${(props) => props.theme.pink};
    flex-basis: 100%;
    margin: 0;
  }

  h3 {
    color: ${(props) => props.theme.pink};
    font-size: 1.4rem;
  }
`;

class TitleCard extends React.Component<TitleCardProps> {
  render() {
    return (
      <TitleCardStyles>
        {this.props.url ? (
          <Link href={`/exhibitions/${this.props.url}`}>
            <a>
              <div className='text'>
                {this.props.onView && <h2>On View:</h2>}
                <h2>{this.props.text}</h2>
                {this.props.subtitle && (
                  <>
                    <h2>by</h2>
                    <h2>{this.props.subtitle}</h2>
                    {this.props.date && <h3>{this.props.date}</h3>}
                  </>
                )}
              </div>
            </a>
          </Link>
        ) : (
          <div className='text'>
            {this.props.onView && <h2>On View:</h2>}
            <h2>{this.props.text}</h2>
            {this.props.subtitle && (
              <>
                <h2>by</h2>
                <h2>{this.props.subtitle}</h2>
                {this.props.date && <h3>{this.props.date}</h3>}
              </>
            )}
          </div>
        )}
      </TitleCardStyles>
    );
  }
}

export default TitleCard;

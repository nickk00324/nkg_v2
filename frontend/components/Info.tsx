import styled from "styled-components";
import classNames from "classnames";
import formatDate from "../lib/formatDate";

type InfoProps = {
  artist: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  onPastPage?: boolean;
};

interface InfoStylesProps {
  onPastPage?: boolean;
}

const InfoStyles = styled.div<InfoStylesProps>`
  padding: ${props => (!props.onPastPage ? "1rem 2rem" : "1rem 0")};
  p {
    padding: 0;
    margin: 0.5rem 0;
  }

  .past-page {
    padding: 1rem 0;
  }
`;

const Info = (props: InfoProps) => {
  const { artist, title, startDate, endDate } = props;
  return (
    <InfoStyles onPastPage={props.onPastPage}>
      <p>{artist}</p>
      {title && <p>{title}</p>}
      {startDate && endDate && (
        <p>
          {formatDate(startDate)} - {formatDate(endDate, true)}
        </p>
      )}
      {!startDate && <p>COMING SOON</p>}
    </InfoStyles>
  );
};

export default Info;

import styled from "styled-components";
import classNames from "classnames";
import formatDate from "../lib/formatDate";

type InfoProps = {
  artist: string;
  title?: string;
  startDate?: string;
  endDate?: string;
};

const InfoStyles = styled.div`
  padding: 1rem 2rem;
  p {
    padding: 0;
    margin: 0.5rem 0;
  }
`;

const Info = (props: InfoProps) => {
  const { artist, title, startDate, endDate } = props;
  return (
    <InfoStyles>
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

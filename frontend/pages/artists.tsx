import styled from "styled-components";
import Artists from "../components/Artists";

export const ArtistsPageStyles = styled.div`
  display: flex;
  height: 100vh;
  border-right: ${props => props.theme.border};
`;

const ArtistsPage = (props: any) => {
  return <Artists name={props.query.name} />;
};

export default ArtistsPage;

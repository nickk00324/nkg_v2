import Artist from "../../components/Artist";

const ArtistPage = (props: any) => {
  return <Artist name={props.query.name} />;
};

export default ArtistPage;

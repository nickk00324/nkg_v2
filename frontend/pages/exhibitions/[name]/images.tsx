import Exhibition from "../../../components/Exhibition";

const ExhibitionImagesPage = (props: any) => {
  return <Exhibition name={props.query.name} location={"images"} />;
};

export default ExhibitionImagesPage;

import Exhibition from "../../components/Exhibition";

const ExhibitionPage = (props: any) => {
  return <Exhibition name={props.query.name} location={"images"} />;
};

export default ExhibitionPage;

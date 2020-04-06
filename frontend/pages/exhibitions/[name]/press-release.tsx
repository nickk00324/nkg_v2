import Exhibition from "../../../components/Exhibition";

const PressReleasePage = (props: any) => {
  return <Exhibition name={props.query.name} location={"pr"} />;
};

export default PressReleasePage;

import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./styles";
const SpecificGroup = () => {
  const params = useParams();

  return (
    <Container>
      <Header path="groups" />
      SpecificGroup
    </Container>
  );
};

export default SpecificGroup;

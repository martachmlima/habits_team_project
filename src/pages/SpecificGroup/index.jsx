import Header from "../../components/Header";
import { Container } from "./styles";
import { useParams } from "react-router";
import { useGroups } from "../../providers/Groups";

const SpecificGroup = () => {
  const { groupId } = useParams();

  const { allGroups } = useGroups();

  const thisGroup = allGroups.find((item) => item.id === groupId);

  return (
    <>
      <Header />
      <Container>
        <Header />
        {thisGroup.name}
      </Container>
    </>
  );
};

export default SpecificGroup;

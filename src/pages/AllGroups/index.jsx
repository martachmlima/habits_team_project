import Header from "../../components/Header";
import { GroupsContainer } from "./styles";
const AllGroups = () => {
  return (
    <>
      <Header path="groups" userName="Marta Lima" />
      <GroupsContainer>
        <Header path="groups" />
        All Groups
      </GroupsContainer>
    </>
  );
};

export default AllGroups;

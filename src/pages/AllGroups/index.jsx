import Header from "../../components/Header";
import { GroupsContainer } from "./styles";
import { useGroups } from "../../providers/Groups";

const AllGroups = () => {
  const { allGroups } = useGroups();

  return (
    <GroupsContainer>
      <Header path="groups" />
      {allGroups.map((group) => (
        <p>{group.name}</p>
      ))}
    </GroupsContainer>
  );
};

export default AllGroups;

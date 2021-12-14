import Header from "../../components/Header";
import { MainContainer, GroupsContainer } from "./styles";
import { useGroups } from "../../providers/Groups";
import GroupCard from "../../components/GroupCard";

const AllGroups = () => {
  const { allGroups } = useGroups();

  return (
    <MainContainer>
      <Header path="groups" />
      <GroupsContainer>
        {allGroups.map((group) => (
          <>
            <GroupCard
              key={group.id}
              name={group.name}
              description={group.description}
              category={group.category}
              creator={group.creator.username}
              id={group.id}
              users_on_group={group.users_on_group}
            />
          </>
        ))}
      </GroupsContainer>
    </MainContainer>
  );
};

export default AllGroups;

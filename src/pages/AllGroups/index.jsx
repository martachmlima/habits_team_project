import Header from "../../components/Header";
import { MainContainer, GroupsContainer } from "./styles";
import { useGroups } from "../../providers/Groups";
import GroupCard from "../../components/GroupCard";
import { useHistory } from "react-router-dom";

const AllGroups = () => {
  const { allGroups } = useGroups();

  const { setCardGroup, setActivities, setGoals } = useGroups();
  const history = useHistory();

  function handleGroup(card) {
    localStorage.setItem("KenzieHabits:group", JSON.stringify(card));
    setCardGroup(card);
    setActivities(card.activities);
    setGoals(card.goals);
    history.push("/group/goals");
  }

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
              currentFunction={() => handleGroup(group)}
            />
          </>
        ))}
      </GroupsContainer>
    </MainContainer>
  );
};

export default AllGroups;

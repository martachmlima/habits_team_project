import Header from "../../components/Header";
import { MainContainer, GroupsContainer, Box } from "./styles";
import { useGroups } from "../../providers/Groups";
import GroupCard from "../../components/GroupCard";
import { useHistory } from "react-router-dom";
import BasicButtons from "../../components/Button";
import { GrPrevious, GrNext } from "react-icons/gr";

const AllGroups = () => {
  const { allGroups, next, setNext, filtred } = useGroups();

  const { setCardGroup, setActivities, setGoals, setIdGroup } = useGroups();
  const history = useHistory();

  function handleGroup(card, id) {
    setIdGroup(id);
    setCardGroup(card);
    setActivities(card.activities);
    setGoals(card.goals);
    history.push("/group/goals");
  }

  const nextPage = () => {
    setNext(next + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const previousPage = () => {
    setNext(next - 1);
    if (next > 0) window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <MainContainer>
      <Header path="groups" />
      <Box>
        <h2>Grupos</h2>
        <GroupsContainer>
          {filtred.length !== 0
            ? filtred.map((group) => (
                <div key={group.id}>
                  <GroupCard
                    name={group.name}
                    description={group.description}
                    category={group.category}
                    creator={group.creator.username}
                    id={group.id}
                    users_on_group={group.users_on_group}
                    currentFunction={handleGroup(group, group.id)}
                  />
                </div>
              ))
            : allGroups.map((group) => (
                <div key={group.id}>
                  <GroupCard
                    name={group.name}
                    description={group.description}
                    category={group.category}
                    creator={group.creator.username}
                    id={group.id}
                    users_on_group={group.users_on_group}
                    currentFunction={() => handleGroup(group, group.id)}
                  />
                </div>
              ))}
        </GroupsContainer>
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BasicButtons
          style={{ width: "90px" }}
          sx={{ p: 2 }}
          color="secondary"
          onClick={previousPage}
        >
          <GrPrevious />
        </BasicButtons>
        <BasicButtons
          style={{ width: "90px" }}
          sx={{ p: 2, ml: 2 }}
          color="secondary"
          onClick={nextPage}
        >
          <GrNext />
        </BasicButtons>
      </div>
    </MainContainer>
  );
};

export default AllGroups;

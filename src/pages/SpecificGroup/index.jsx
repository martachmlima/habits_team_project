import BasicButtons from "../../components/Button";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, SectionsMenu } from "./styles";
import { useGroups } from "../../providers/Groups";
import CardGoals from "../../components/CardGoals";
import CardActivities from "../../components/CardActivities";
import NewGoals from "../../components/ModalNewGoal";
import api from "../../services/api";
import NewActivities from "../../components/ModalNewActivity";

const SpecificGroup = () => {
  const [render, setRender] = useState("goals");

  const { idGroup, cardGroup, setCardGroup } = useGroups();

  useEffect(() => {
    api
      .get(`groups/${idGroup}/`)
      .then((resp) => setCardGroup(resp.data))
      .catch((err) => console.log(err));
  }, [cardGroup.goals, cardGroup.activities, idGroup, setCardGroup]);

  const { goals, activities } = cardGroup;

  return (
    <Container>
      <Header path="specific" />
      <SectionsMenu render={render}>
        <section className="description">
          <div className="description_info">
            <h2 className="description_info_title">
              Nome: <span>{cardGroup.name}</span>
            </h2>
            <h2 className="description_info_title">
              Descrição: <span>{cardGroup.description}</span>
            </h2>
            <h2 className="description_info_title">
              Categoria: <span>{cardGroup.category}</span>
            </h2>
            <h2 className="description_info_title">
              Criador: <span>{cardGroup.creator?.username}</span>
            </h2>
          </div>
          <div className="description_button">
            <BasicButtons>Sair</BasicButtons>
          </div>
        </section>
        <div className="buttonlink">
          <button className="buttonGoal" onClick={() => setRender("goals")}>
            Metas
          </button>
          <span>|</span>
          <button className="buttonActiv" onClick={() => setRender("achivied")}>
            Atividades
          </button>
        </div>
        <section className="cards">
          {render === "goals" ? (
            <CardGoals goals={goals} />
          ) : (
            <CardActivities activities={activities} />
          )}
        </section>
      </SectionsMenu>
      {render === "goals" ? <NewGoals /> : <NewActivities />}
    </Container>
  );
};

export default SpecificGroup;

import BasicButtons from "../../components/Button";
import { useState } from "react";
import Header from "../../components/Header";
import { Container, SectionsMenu } from "./styles";
import { useGroups } from "../../providers/Groups";
import CardGoals from "../../components/CardGoals";
import CardActivities from "../../components/CardActivities";

const SpecificGroup = () => {
  const [render, setRender] = useState("goals");

  const { cardGroup } = useGroups();

  console.log(cardGroup);

  return (
    <Container>
      <Header />
      <SectionsMenu>
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
              Criador: <span>{cardGroup.creator.username}</span>
            </h2>
          </div>
          <div className="description_button">
            <BasicButtons>Sair</BasicButtons>
          </div>
        </section>
        <div className="buttonlink">
          <button onClick={() => setRender("goals")}>Metas</button> |
          <button onClick={() => setRender("achivied")}>Atividades</button>
        </div>
        <section className="cards">
          {render === "goals" ? (
            <CardGoals goals={cardGroup.goals} />
          ) : (
            <CardActivities activities={cardGroup.activities} />
          )}
        </section>
      </SectionsMenu>
    </Container>
  );
};

export default SpecificGroup;

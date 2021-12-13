import BasicButtons from "../../components/Button";
import { useState } from "react";
import Header from "../../components/Header";
import { Container, SectionsMenu } from "./styles";
import { useGroups } from "../../providers/Groups";

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
            <h2 className="description_info_title">Nome: {cardGroup.name}</h2>
            <h2 className="description_info_title">
              Descrição: {cardGroup.description}
            </h2>
            <h2 className="description_info_title">
              Categoria: {cardGroup.category}
            </h2>
            <h2 className="description_info_title">
              Criador: {cardGroup.creator.username}
            </h2>
          </div>
          <div className="description_button">
            <BasicButtons>Sair</BasicButtons>
          </div>
        </section>
        <div>
          <button onClick={() => setRender("goals")}>Goals</button> |
          <button onClick={() => setRender("achivied")}>Achivied</button>
        </div>
        {render === "goals" ? <div>goals</div> : <div>achivied</div>}
      </SectionsMenu>
    </Container>
  );
};

export default SpecificGroup;

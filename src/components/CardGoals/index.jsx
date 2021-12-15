import { Container } from "./styles";
import BasicButtons from "../Button";
import { useGroups } from "../../providers/Groups";

function CardGoals({ goals }) {
  const { deleteGoals } = useGroups();

  return (
    <>
      {goals &&
        goals.map((card) => (
          <Container>
            <div className="info">
              <h3>
                Título: <span>{card.title}</span>
              </h3>
              <h3>
                Dificuldade: <span>{card.difficulty}</span>
              </h3>
              <h3>
                Progresso: <span>{card.how_much_achieved}</span> dias concluidos
              </h3>
            </div>
            <div className="button">
              <BasicButtons onClick={() => deleteGoals(card.id)}>
                DELETAR
              </BasicButtons>
            </div>
          </Container>
        ))}
    </>
  );
}

export default CardGoals;

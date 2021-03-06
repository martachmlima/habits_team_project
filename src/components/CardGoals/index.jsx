import { Container } from "./styles";
import BasicButtons from "../Button";
import { useGroups } from "../../providers/Groups";
import EditaGoal from "../EditGoal";

function CardGoals({ goals }) {
  const { deleteGoals } = useGroups();

  return (
    <>
      {goals &&
        goals.map((card) => (
          <Container key={card.id}>
            <div className="info">
              <h3>
                Título:{" "}
                <span>
                  {card.title.length > 20
                    ? card.title.substring(0, 20) + "..."
                    : card.title}
                </span>
              </h3>
              <h3>
                Dificuldade: <span>{card.difficulty}</span>
              </h3>
              <h3>
                Progresso: <span>{card.how_much_achieved} dias concluidos</span>
              </h3>
            </div>
            <div className="button">
              <BasicButtons onClick={() => deleteGoals(card.id)}>
                DELETAR
              </BasicButtons>
              <EditaGoal
                done={card.achieved}
                id={card.id}
                achieved={card.how_much_achieved}
              >
                EDITAR
              </EditaGoal>
            </div>
          </Container>
        ))}
    </>
  );
}

export default CardGoals;

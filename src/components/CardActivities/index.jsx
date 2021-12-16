import { Container } from "./styles";
import BasicButtons from "../Button";
import { useGroups } from "../../providers/Groups";
import EditaActivite from '../EditActivite'

function CardActivities({ activities }) {
  const { deleteActivities } = useGroups();

  return (
    <>
      {activities &&
        activities.map((card) => (
          <Container key={card.id}>
            <div className="info">
              <h3>
                Título: <span>{card.title}</span>
              </h3>
              <h3>
                Data: <span>{card.realization_time}</span>
              </h3>
            </div>
            <div className="button">
              <BasicButtons onClick={() => deleteActivities(card.id)}>
                DELETAR
              </BasicButtons>
              <EditaActivite id={card.id} >
                EDITAR
              </EditaActivite>
            </div>
          </Container>
        ))}
    </>
  );
}

export default CardActivities;

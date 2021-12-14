import { Container } from "./styles";
import BasicButtons from "../Button";
import { useUser } from '../../providers/User'
import { toast } from 'react-hot-toast'
import api from '../../services/api'


function CardActivities({ activities }) {

  const { token } = useUser();

  const deleteActivities = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.success("Atividade excluida com sucesso");
      })
      .catch((response) =>
        toast.error("Erro inesperado, tente novamente mais tarde")
      );
  };

  return (
    activities &&
    activities.map((card) => {
      console.log(card);
      return (
        <Container>
          <div className="info">
            <h3>
              Título: <span>{card.title}</span>
            </h3>
            <h3>
              Data: <span>{card.how_much_achieved}</span>
            </h3>
          </div>
          <div className="button">
            <BasicButtons onClick={() => deleteActivities(card.id) } >DELETAR</BasicButtons>
          </div>
        </Container>
      );
    })
  );
}

export default CardActivities;

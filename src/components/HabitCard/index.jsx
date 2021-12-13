import BasicButtons from "../Button";
import CustomizedDialogs from "../EditHabitModal";
import { ContainerCard, ContainerButton } from "./styles";
const HabitCard = ({
  title,
  categoria,
  dificuldade,
  frequencia,
  onClick,
  id,
  achievedValue,
}) => {
  return (
    <ContainerCard>
      <h2>{title}</h2>
      <p>Categoria: {categoria}</p>
      <p>Dificuldade: {dificuldade}</p>
      <p>Frequência: {frequencia}</p>
      <ContainerButton>
        <BasicButtons onClick={onClick}>Deletar</BasicButtons>
        <CustomizedDialogs id={id} achievedValue={achievedValue}>
          Editar
        </CustomizedDialogs>
      </ContainerButton>
    </ContainerCard>
  );
};

export default HabitCard;

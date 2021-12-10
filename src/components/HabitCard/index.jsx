import BasicButtons from "../Button";
import { ContainerCard } from "./styles";
const HabitCard = ({ title, categoria, dificuldade, frequencia, onClick }) => {
  return (
    <ContainerCard>
      <h2>{title}</h2>
      <p>Categoria: {categoria}</p>
      <p>Dificuldade: {dificuldade}</p>
      <p>Frequência: {frequencia}</p>
      <BasicButtons onClick={onClick}>Deletar</BasicButtons>
    </ContainerCard>
  );
};

export default HabitCard;

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
  done,
}) => {
  const showValue = 3 * achievedValue;
  const myStyle = {
    width: `${showValue}px`,
  };
  return (
    <ContainerCard>
      <h2>{title}</h2>
      <p>Categoria: {categoria}</p>
      <p>Dificuldade: {dificuldade}</p>
      <p>Frequência: {frequencia}</p>
      <p className="meta">
        Progresso:{" "}
        <p className="progress">
          <section style={myStyle} className="colorbar"></section>
        </p>
        {done && <section>Meta alcançada!</section>}
      </p>

      <ContainerButton>
        <BasicButtons onClick={onClick}>Deletar</BasicButtons>
        <CustomizedDialogs id={id} achievedValue={achievedValue} done={done}>
          Editar
        </CustomizedDialogs>
      </ContainerButton>
    </ContainerCard>
  );
};

export default HabitCard;

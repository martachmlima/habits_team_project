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
      <div className="meta">
        Progresso:{" "}
        <div className="progress">
          <section style={myStyle} className="colorbar"></section>
        </div>
        {done && <section className="alert">Meta alcançada!</section>}
      </div>

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

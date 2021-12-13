import { useGroups } from "../../providers/Groups";
import { ContainerGroup, ContainerButton } from "./styles";
import BasicButtons from "../Button";

const GroupCard = ({ name, description, category, creator, id }) => {
  const { joinGroup, leaveGroup } = useGroups();

  return (
    <ContainerGroup>
      <h4>{name}</h4>
      <p>Descrição: {description}</p>
      <p>Categoria: {category}</p>
      <p>Criador: {creator}</p>
      <ContainerButton>
        <BasicButtons onClick={() => joinGroup(id)}>Entrar</BasicButtons>
        <BasicButtons onClick={() => leaveGroup(id)}>Sair</BasicButtons>
      </ContainerButton>
    </ContainerGroup>
  );
};

export default GroupCard;

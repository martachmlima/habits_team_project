import { useGroups } from "../../providers/Groups";
import { ContainerGroup, ContainerButton } from "./styles";
import BasicButtons from "../Button";
import { Link } from "react-router-dom";
import { useUser } from "../../providers/User";
import CustomizedDialogs from "../ModalEditGroup";

const GroupCard = ({
  name,
  description,
  category,
  creator,
  id,
  users_on_group,
}) => {
  const { joinGroup, leaveGroup } = useGroups();
  const { userName } = useUser();

  const usersArray = users_on_group.map((user) => user.username === userName);
  const arrayInclludesUSer = usersArray.includes(true);

  return (
    <ContainerGroup>
      <h4>{name}</h4>
      <p>Descrição: {description}</p>
      <p>Categoria: {category}</p>
      <p>Criador: {creator}</p>
      <ContainerButton>
        {arrayInclludesUSer ? (
          <BasicButtons onClick={() => leaveGroup(id)}>Sair</BasicButtons>
        ) : (
          <BasicButtons onClick={() => joinGroup(id)}>Entrar</BasicButtons>
        )}
        {creator === userName && <CustomizedDialogs id={id} />}
      </ContainerButton>
      <Link to={`/groups/${id}`}>Mais informações</Link>
    </ContainerGroup>
  );
};

export default GroupCard;

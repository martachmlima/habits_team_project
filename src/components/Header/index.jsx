import { HeaderContainer, ProfileContainer, SearchContainer } from "./styles";
import { BiSearch } from "react-icons/bi";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router";

const Header = ({ path, userName }) => {
  const history = useHistory();
  return (
    <HeaderContainer path={path}>
      <h1 onClick={() => history.push("/dashboard")}>Gest Habit</h1>
      <>
        {path === "dashboard" ? (
          <span onClick={() => history.push("/groups")}>Grupos</span>
        ) : (
          <span>Criar Grupo</span>
        )}
      </>
      <SearchContainer>
        <input
          placeholder={
            path === "dashboard" ? "Pesquisar hábitos" : "Pesquisar grupos"
          }
        ></input>
        <BiSearch />
      </SearchContainer>
      <ProfileContainer>
        <Avatar sx={{ bgcolor: "var(--light-purple)", cursor: "pointer" }} />
        <p>{userName}</p>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;

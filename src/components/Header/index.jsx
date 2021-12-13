import {
  SearchMobile,
  Section,
  HeaderContainer,
  ProfileContainer,
  SearchContainer,
  SectionMobile,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router";
import ModalProfile from "../ModalProfile";
import { useUser } from "../../providers/User";
import { useGroups } from "../../providers/Groups";

const Header = ({ path }) => {
  const { setData } = useGroups();
  const { userName, setInputValue } = useUser();
  const history = useHistory();
  return (
    <>
      <HeaderContainer path={path}>
        <Section>
          <h1 onClick={() => history.push("/dashboard")}>Gest Habit</h1>
          <SearchContainer className="desktop">
            <input
              onChange={(e) => {
                if (path === "dashboard") {
                  setInputValue(e.target.value);
                }
                setData(e.target.value);
              }}
              placeholder={
                path === "dashboard" ? "Pesquisar hábitos" : "Pesquisar grupos"
              }
            ></input>
            <BiSearch />
          </SearchContainer>
          <ModalProfile>
            <ProfileContainer>
              <Avatar
                sx={{ bgcolor: "var(--light-purple)", cursor: "pointer" }}
              />
              <p>{userName}</p>
            </ProfileContainer>
          </ModalProfile>
        </Section>
        <>
          {path === "dashboard" ? (
            <SectionMobile>
              <span onClick={() => history.push("/groups")}>Buscar Grupos</span>
              <span>Meus Grupos</span>
            </SectionMobile>
          ) : path === "groups" ? (
            <span>Buscar Grupos</span>
          ) : (
            <span>Criar Grupo</span>
          )}
        </>
      </HeaderContainer>
      <SearchMobile className="mobile">
        <input
          placeholder={
            path === "dashboard" ? "Pesquisar hábitos" : "Pesquisar grupos"
          }
        ></input>
        <BiSearch />
      </SearchMobile>
    </>
  );
};

export default Header;

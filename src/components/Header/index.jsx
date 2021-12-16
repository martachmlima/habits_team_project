import {
  SearchMobile,
  Section,
  HeaderContainer,
  ProfileContainer,
  SearchContainer,
  SectionMobile,
  MobileSpan,
} from "./styles";
import { BiSearch } from "react-icons/bi";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router";
import ModalProfile from "../ModalProfile";
import { useUser } from "../../providers/User";
import { useGroups } from "../../providers/Groups";

const Header = ({ path, mobileDisplay, handleDisplay }) => {
  const { setData } = useGroups();
  const { userName, setInputValue } = useUser();
  const history = useHistory();

  return (
    <>
      <HeaderContainer path={path}>
        <Section>
          <h1 onClick={() => history.push("/dashboard")}>Gest Habit</h1>
          {path === "specific" ? (
            <span onClick={() => history.push("/groups")}>Buscar Grupos</span>
          ) : (
            <SearchContainer className="desktop">
              <input
                onChange={(e) => {
                  if (path === "dashboard") {
                    setInputValue(e.target.value);
                  }
                  setData(e.target.value);
                }}
                placeholder={
                  path === "dashboard"
                    ? "Pesquisar hábitos"
                    : "Pesquisar grupos"
                }
              ></input>
              <BiSearch />
            </SearchContainer>
          )}
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
          {path === "dashboard" && mobileDisplay ? (
            <SectionMobile>
              <span onClick={() => history.push("/groups")}>Buscar Grupos</span>
              <span onClick={handleDisplay}>Meus Grupos</span>
            </SectionMobile>
          ) : (
            path === "dashboard" && (
              <SectionMobile>
                <span onClick={() => history.push("/groups")}>
                  Buscar Grupos
                </span>
                <span onClick={handleDisplay}>Meus Hábitos</span>
              </SectionMobile>
            )
          )}
        </>
      </HeaderContainer>
      {path === "specific" ? (
        <MobileSpan onClick={() => history.push("/groups")}>
          Buscar Grupos
        </MobileSpan>
      ) : (
        <SearchMobile className="mobile">
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
        </SearchMobile>
      )}
    </>
  );
};

export default Header;

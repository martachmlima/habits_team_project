import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { Box } from "@mui/material";
import CardContact from "../../components/CardContact";
import Button from "../../components/Button";

function Home() {
  const history = useHistory();
  const handleClick = (param) => {
    history.push(param);
  };

  return (
    <Container>
      <h1>
        Gest<span>Habit</span>
      </h1>
      <main>
        <h2>Gerencie seus Hábitos</h2>
        <div className="menu_bottoes">
          <div className="botao1">
            <Button onClick={() => handleClick("/login")}>Login</Button>
          </div>
          <div className="botao1">
            <Button onClick={() => handleClick("/signup")}>SignUp</Button>
          </div>
        </div>
      </main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CardContact
          name={"Allan"}
          img={
            "https://ca.slack-edge.com/TQZR39SET-U024Y6X9DK3-56fbb0b61ca4-512"
          }
          link={"https://www.linkedin.com/in/allan-verde-rodrigues-8b9038225/"}
        />
        <CardContact
          name={"Filipe"}
          img={
            "https://ca.slack-edge.com/TQZR39SET-U01PZPR3HPH-151802fec91c-512"
          }
          link={"https://www.linkedin.com/in/filipe-melo-389404222"}
        />
        <CardContact
          name={"Gustavo"}
          img={
            "https://ca.slack-edge.com/TQZR39SET-U028RGDDZ9Q-8d0a721467bd-512"
          }
          link={"https://www.linkedin.com/in/gustavo-ribeiro-1522331a7/"}
        />
        <CardContact
          name={"Heitor"}
          img={
            "https://ca.slack-edge.com/TQZR39SET-U022VMQP2KD-b8f1ead07a7f-512"
          }
          link={"https://www.google.com"}
        />
        <CardContact
          name={"Marta"}
          img={
            "https://ca.slack-edge.com/TQZR39SET-U025P2EM6H0-06eb33c8dd24-512"
          }
          link={"https://www.linkedin.com/in/marta-lima-bsb/"}
        />
      </Box>
    </Container>
  );
}

export default Home;

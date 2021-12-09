// import { GroupsIcon, SmartToyIcon } from "@mui/icons-material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GroupsIcon from "@mui/icons-material/Groups";
import { Container, Card } from "./styles";

function Aside() {
  return (
    <Container>
      <div>
        <GroupsIcon />
        <h1>Grupos</h1>
      </div>
      <section>
        <Card>
          <div className="card_icon">
            <SmartToyIcon />
          </div>
          <div className="card_info">
            <h3>Grupo de caminhada</h3>
          </div>
        </Card>
      </section>
    </Container>
  );
}

export default Aside;

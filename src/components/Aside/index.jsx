// import { GroupsIcon, SmartToyIcon } from "@mui/icons-material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GroupsIcon from "@mui/icons-material/Groups";
import { Container, Card } from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";

function Aside() {
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [token] = useState(
    () => JSON.parse(localStorage.getItem("KenzieHabits:token")) || ""
  );

  useEffect(() => {
    api
      .get("./groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setSubscribedGroups(response.data);
      })
      .catch((err) => console.log(err));
  }, [token]);
  console.log(subscribedGroups);
  return (
    <Container>
      <div className="aside_header">
        <GroupsIcon />
        <h1>GRUPOS</h1>
      </div>
      <section>
        {subscribedGroups.map((card) => {
          return (
            <Card>
              <div className="card_icon">
                <SmartToyIcon />
              </div>
              <div className="card_info">
                <h3>{card.name}</h3>
              </div>
            </Card>
          );
        })}
      </section>
      <footer>
        <h3>Criar grupo</h3>
      </footer>
    </Container>
  );
}

export default Aside;

import { useHistory } from "react-router-dom";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import { Container, Card } from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import CreateGroup from "../ModalCreateGroup";

function Aside() {
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [token] = useState(() => {
    const decoded = localStorage.getItem("@KenzieHabits:token") || "";
    return decoded;
  });

  const history = useHistory();

  function oi(param) {
    console.log(param);
    history.push(`groups/${param}`);
  }

  useEffect(() => {
    api
      .get("./groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setSubscribedGroups(response.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <Container>
      <div className="aside_header">
        <GroupsIcon />
        <Link to="/groups">
          <h1>GRUPOS</h1>
        </Link>
      </div>
      <section>
        {subscribedGroups.map((card) => {
          return (
            <Card key={card.id} onClick={() => oi(card.id)}>
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
        <CreateGroup />
      </footer>
    </Container>
  );
}

export default Aside;

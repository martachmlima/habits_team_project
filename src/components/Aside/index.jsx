// import { GroupsIcon, SmartToyIcon } from "@mui/icons-material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Modal } from '@mui/material';
import { Link } from 'react-router-dom'
import GroupsIcon from "@mui/icons-material/Groups";
import { Container, Card } from "./styles";
import api from "../../services/api";
import { useState, useEffect } from "react";
import BasicButtons from "../Button";

function Aside() {
  const [subscribedGroups, setSubscribedGroups] = useState([]);
  const [token] = useState(
    () => JSON.parse(localStorage.getItem("KenzieHabits:token")) || ""
  );

  const openModal = () => {
    console.log('abrir modal')
  }

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
        <Link to='/groups'><h1>GRUPOS</h1></Link>
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
        <BasicButtons onClick={openModal}>Criar grupo</BasicButtons>
      </footer>
    </Container>
  );
}

export default Aside;

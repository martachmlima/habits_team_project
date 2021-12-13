import { useState } from "react";
import Header from "../../components/Header";
import { Container, SectionsMenu } from "./styles";
const SpecificGroup = () => {
  const [render, setRender] = useState("goals");

  return (
    <Container>
      <Header />
      <SectionsMenu>
        <div>
          <button onClick={() => setRender("goals")}>Goals</button> |
          <button onClick={() => setRender("achivied")}>Achivied</button>
        </div>
        {render === "goals" ? <div>goals</div> : <div>achivied</div>}
      </SectionsMenu>
    </Container>
  );
};

export default SpecificGroup;

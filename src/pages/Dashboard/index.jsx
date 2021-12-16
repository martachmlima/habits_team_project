import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer, MainContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
import { useState } from "react";

function Dashboard () {
  const [mobileDisplay, setMobileDisplay] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  window.addEventListener("resize", (evt) => {
    setWindowWidth(evt.currentTarget.innerWidth);
  });

  const handleDisplay = () => {
    setMobileDisplay(!mobileDisplay);
  };

  return (
    <DashboardContainer>
      <Header
        path="dashboard"
        handleDisplay={handleDisplay}
        mobileDisplay={mobileDisplay}
      />
      <MainContainer>
        {windowWidth > 800 ? (
          <>
            <Aside /> <HabitDisplay />
          </>
        ) : windowWidth <= 800 && mobileDisplay ? (
          <HabitDisplay />
        ) : (
          <Aside />
        )}
      </MainContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

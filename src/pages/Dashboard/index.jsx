import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer, MainContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
import NewHabit from "../../components/NewHabit";
import { useState } from "react";

const Dashboard = () => {
  const [mobileDisplay, setMobileDisplay] = useState(true);

  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  window.addEventListener("resize", (evt) => {
    setWindowWidth(evt.currentTarget.innerWidth);
  });

  // console.log(windomWidth);

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
            <Aside /> <HabitDisplay />{" "}
          </>
        ) : windowWidth <= 800 && mobileDisplay ? (
          <HabitDisplay />
        ) : (
          <Aside />
        )}
      </MainContainer>
      <NewHabit />
    </DashboardContainer>
  );
};

export default Dashboard;

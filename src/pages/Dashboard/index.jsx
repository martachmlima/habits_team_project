import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer, MainContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
import NewHabit from "../../components/NewHabit";
import { useState } from "react";

const Dashboard = () => {
  const [mobileDisplay, setMobileDisplay] = useState(true);

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
        <Aside />
        <HabitDisplay />
      </MainContainer>
      <NewHabit />
    </DashboardContainer>
  );
};

export default Dashboard;

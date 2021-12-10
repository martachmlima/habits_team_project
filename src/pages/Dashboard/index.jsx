import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer, MainContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
import NewHabit from "../../components/NewHabit";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header path="dashboard" userName="Marta Lima" />
      <MainContainer>
        <Aside />
        <HabitDisplay />
        <NewHabit />
      </MainContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

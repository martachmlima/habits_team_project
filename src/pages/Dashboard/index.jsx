import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer, MainContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header path="dashboard" userName="Marta Lima" />
      <MainContainer>
        <Aside />
        <HabitDisplay />
      </MainContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
import NewHabit from "../../components/NewHabit";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header path="dashboard" userName="Marta Lima" />

      <Aside />

      <HabitDisplay />
      <NewHabit />
    </DashboardContainer>
  );
};

export default Dashboard;

import Header from "../../components/Header";
import { DashboardContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header path="dashboard" userName="Marta Lima" />
      <HabitDisplay />
    </DashboardContainer>
  );
};

export default Dashboard;

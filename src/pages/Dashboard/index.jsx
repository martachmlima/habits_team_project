import Header from "../../components/Header";
import Aside from "../../components/Aside";
import { DashboardContainer } from "./styles";
import HabitDisplay from "../../components/HabitsDisplay";
import { useUser } from "../../providers/User";

const Dashboard = () => {
  const { signOut } = useUser();
  return (
    <DashboardContainer>
      <Header path="dashboard" userName="Marta Lima" />
      <Aside />
      <HabitDisplay />
      <button onClick={signOut}> Sair </button>
    </DashboardContainer>
  );
};

export default Dashboard;

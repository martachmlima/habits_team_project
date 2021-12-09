import Header from "../../components/Header";
import { useUser } from "../../providers/User";

const Dashboard = () => {
  const { signOut } = useUser();
  return (
    <div>
      <Header path="dashboard" userName="Marta Lima" />
      Dashboard
      <button onClick={signOut}> Sair </button>
    </div>
  );
};

export default Dashboard;

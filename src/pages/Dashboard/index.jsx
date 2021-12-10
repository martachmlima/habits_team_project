import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("@KenzieHabits:token")) || null;

  const history = useHistory();
  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token]);

  return (
    <div>
      <Header path="dashboard" userName="Marta Lima" />
    </div>
  );
};

export default Dashboard;

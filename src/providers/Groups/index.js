import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useUser } from "../User";

export const GroupsContext = createContext({});

export const useGroups = () => {
  const context = useContext(GroupsContext);
  return context;
};

export const GroupsProvider = ({ children }) => {
  const [cardGroup, setCardGroup] = useState(() => localStorage.getItem('KenzieHabits:group') || {} );

  const [allGroups, setAllGroups] = useState([]);
  const [data, setData] = useState("");
  const { token } = useUser();
  const [activities, setActivities] = useState([])
  const [goals, setGoals] = useState([])

  const deleteActivities = (id) => {
    const newActivities = activities.filter((activities) => activities.id !== id)
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActivities(newActivities);
        toast.success("Atividade deletada!");
      })
      .catch((err) => console.log(err));
  };

  const deleteGoals = (id) => {
    const newGoals = goals.filter((goal) => goal.id !== id)
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setGoals(newGoals);
        toast.success("Meta deletada!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api
      .get(`groups/?search=${data}`)
      .then((response) => {
        setAllGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const joinGroup = (id) => {
    api
      .post(
        `groups/${id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Bem-vindo ao grupo!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Você já faz parte deste grupo");
      });
  };

  const leaveGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Você saiu do grupo!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Você não faz parte deste grupo");
      });
  };

  useEffect(() => {
    if (token) {
      api
        .get("groups/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setAllGroups(response.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <GroupsContext.Provider
      value={{ allGroups, setData, joinGroup, leaveGroup, setCardGroup, cardGroup, deleteGoals, deleteActivities, activities, setActivities, goals, setGoals }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

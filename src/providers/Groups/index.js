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
  const [cardGroup, setCardGroup] = useState(
    () => localStorage.getItem("KenzieHabits:group") || {}
  );
  const [allGroups, setAllGroups] = useState([]);
  const [data, setData] = useState("");
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [next, setNext] = useState(1);
  const { token, setSubscribedGroups, subscribedGroups } = useUser();
  const [idGroup, setIdGroup] = useState(
    JSON.parse(localStorage.getItem("KenzieHabits:group")) || {}
  );

  useEffect(() => {
    setActivities(cardGroup.activities);
    setGoals(cardGroup.goals);
  }, [cardGroup]);

  const deleteActivities = (id) => {
    const newActivities = activities.filter(
      (activities) => activities.id !== id
    );
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
    const newGoals = goals.filter((goal) => goal.id !== id);
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
  }, [data, allGroups]);

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
        setSubscribedGroups([...subscribedGroups, response.data]);
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

  useEffect(() => {
    fetch(`https://kenzie-habits.herokuapp.com/groups/?page=${next}`)
      .then((Response) => Response.json())
      .then((Response) => setAllGroups([...Response.results]))
      .catch((error) => console.log(error));
  }, [next]);

  return (
    <GroupsContext.Provider
      value={{
        allGroups,
        setData,
        joinGroup,
        leaveGroup,
        setCardGroup,
        cardGroup,
        deleteGoals,
        deleteActivities,
        activities,
        goals,
        next,
        setNext,
        setActivities,
        setGoals,
        idGroup,
        setIdGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

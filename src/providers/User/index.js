import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";

const UserContext = createContext({});

const useUser = () => {
  const context = useContext(UserContext);
  return context;
};

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@KenzieHabits:token") || false
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("@KenzieHabits:userId") || 0
  );
  const [openDrop, setOpenDrop] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const [habits, setHabits] = useState([]);

  const [userName, setUserName] = useState("");

  const [user, setUser] = useState({});

  const [subscribedGroups, setSubscribedGroups] = useState([]);

  const signIn = async (data) => {
    const response = await api.post("sessions/", data);
    const { access } = response.data;
    const decoded = jwt_decode(access);
    localStorage.setItem("@KenzieHabits:token", access);
    localStorage.setItem("@KenzieHabits:userId", JSON.stringify(decoded));
    setToken(access);
    setUserId(decoded);
  };

  const signOut = () => {
    setOpenDrop(true);
    localStorage.removeItem("@KenzieHabits:token");
    localStorage.removeItem("@KenzieHabits:userId");
    setToken(false);
    setUserId(0);
    setOpenDrop(false);
  };
  const createGroup = (data) => {
    setOpenDrop(true);
    api
      .post("groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setSubscribedGroups([...subscribedGroups, response.data]);
        toast.success("Grupo criado com sucesso");
        setOpenDrop(false);
      })
      .catch((response) =>
        toast.error("Algo deu errado, tente novamente mais tarde")
      );
  };

  useEffect(() => {
    if (token) {
      api
        .get("habits/personal/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setHabits(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token, habits]);

  const deleteHabit = (id) => {
    setOpenDrop(true);
    const newHabits = habits.filter((habit) => habit.id !== id);
    api
      .delete(`habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(newHabits);
        toast.success("Hábito deletado!");
        setOpenDrop(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token) {
      const decoded2 = jwt_decode(token);
      const id = String(decoded2.user_id);

      api
        .get(`users/${id}/`)
        .then((response) => {
          setUserName(response.data.username);
          setUser(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token, user]);

  const filterHabts = () => {
    return inputValue === ""
      ? habits.filter((item) => item)
      : habits.filter((item) =>
          item.title
            .toLowerCase()
            .split()
            .map((item) => item)
            .join()
            .includes(
              inputValue
                .toLowerCase()
                .split()
                .map((item) => item)
                .join()
            )
        );
  };

  return (
    <UserContext.Provider
      value={{
        token,
        userId,
        signIn,
        signOut,
        createGroup,
        habits,
        setHabits,
        deleteHabit,
        userName,
        subscribedGroups,
        setSubscribedGroups,
        inputValue,
        setInputValue,
        filterHabts,
        user,
        setUser,
        setUserName,
        openDrop,
        setOpenDrop,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };

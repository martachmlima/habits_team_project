import { createContext, useState, useContext } from "react";
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
    localStorage.removeItem("@KenzieHabits:token");
    localStorage.removeItem("@KenzieHabits:userId");
    setToken(false);
    setUserId(0);
  };
  const createGroup = (data) => {
    api
      .post("groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => toast.success("Grupo criado com sucesso"))
      .catch((response) =>
        toast.error("Algo deu errado, tente novamente mais tarde")
      );
  };

  return (
    <UserContext.Provider
      value={{ token, userId, signIn, signOut, createGroup }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };

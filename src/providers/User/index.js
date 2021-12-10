import { createContext, useState, useContext } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

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
    console.log(decoded);
    setToken(access);
    setUserId(decoded);
  };
  const signOut = () => {
    localStorage.removeItem("@KenzieHabits:token");
    localStorage.removeItem("@KenzieHabits:userId");
    setToken(false);
    setUserId(0);
  };

  return (
    <UserContext.Provider value={{ token, userId, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };

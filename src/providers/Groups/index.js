import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";
import { useUser } from "../User";

export const GroupsContext = createContext({});

export const useGroups = () => {
  const context = useContext(GroupsContext);
  return context;
};

export const GroupsProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);

  const { token } = useUser();

  useEffect(() => {
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
  }, []);

  return (
    <GroupsContext.Provider value={{ allGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};

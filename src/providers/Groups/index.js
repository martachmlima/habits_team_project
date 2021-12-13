import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";

export const GroupsContext = createContext({});

export const useGroups = () => {
  const context = useContext(GroupsContext);
  return context;
};

export const GroupsProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [data, setData] = useState("");

  useEffect(() => {
    api
      .get(`groups/?search=${data}`)
      .then((response) => {
        setAllGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <GroupsContext.Provider value={{ allGroups, setData }}>
      {children}
    </GroupsContext.Provider>
  );
};

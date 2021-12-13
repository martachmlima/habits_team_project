import { createContext, useState, useContext } from "react";
// import api from "../../services/api";
// import { useUser } from "../User";

export const GroupsContext = createContext({});

export const useGroups = () => {
  const context = useContext(GroupsContext);
  return context;
};

export const GroupsProvider = ({ children }) => {
  const [cardGroup, setCardGroup] = useState([]);

  return (
    <GroupsContext.Provider value={{ setCardGroup, cardGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};

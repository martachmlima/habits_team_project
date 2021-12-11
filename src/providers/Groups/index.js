import { createContext } from "react";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};

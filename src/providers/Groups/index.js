import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  return <GroupsContext.Provider value={{}}>{children}</GroupsContext.Provider>;
};

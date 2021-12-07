import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

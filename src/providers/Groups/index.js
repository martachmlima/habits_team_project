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
  const [allGroups, setAllGroups] = useState([]);
  const [data, setData] = useState("");
  const { token } = useUser();

  useEffect(() => {
    api
      .get(`groups/?search=${data}`)
      .then((response) => {
        setAllGroups(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [data]);

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
        console.log(response.data);
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

  return (
    <GroupsContext.Provider
      value={{ allGroups, setData, joinGroup, leaveGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

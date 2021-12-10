import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { TextField } from "@mui/material";
import { ButtonNav, ButtonChange } from "./styles";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function SwipeableTemporaryDrawer({ anchor }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Insira novo usuário")
      .max(18, "Máximo 18 caracters"),
    email: yup.string().required("Insira novo E-mail").email(),
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const list = (anchor) => (
    <Box
      sx={{
        maxWidth: anchor === "top" || anchor === "bottom" ? "auto" : 500,
        textAlign: "center",
      }}
      role="presentation"
    >
      <form onSubmit={handleSubmit(handleChange)}>
        <List>
          {
            <ListItem>
              <ListItemIcon
                sx={{ width: "100%", display: "flex", flexDirection: "column" }}
              >
                <TextField
                  color="secondary"
                  sx={{
                    "& input:valid + fieldset": {
                      borderColor: "white",
                      borderWidth: 1,
                      borderRadius: 3,
                      height: 75,
                    },
                    filter: "drop-shadow(0px 4px 4px var(--preto-opacity))",
                    bgcolor: "var(--branco)",
                    borderRadius: 3,
                    height: 70,
                    mt: 3,
                  }}
                  fullWidth
                  label={
                    errors.username?.message ? (
                      errors.username?.message
                    ) : (
                      <>
                        <ManageAccountsIcon /> Novo nome de usuário
                      </>
                    )
                  }
                  error={errors.username?.message}
                  id="fullWidth"
                  {...register("username")}
                />

                <TextField
                  color="secondary"
                  sx={{
                    "& input:valid + fieldset": {
                      borderColor: "white",
                      borderWidth: 1,
                      borderRadius: 3,
                      height: 75,
                    },
                    filter: "drop-shadow(0px 4px 4px var(--preto-opacity))",
                    bgcolor: "var(--branco)",
                    borderRadius: 3,
                    height: 70,
                    mt: 2,
                  }}
                  fullWidth
                  label={
                    errors.email?.message ? (
                      errors.email?.message
                    ) : (
                      <>
                        <MailIcon /> Novo nome de usuário
                      </>
                    )
                  }
                  error={errors.email?.message}
                  id="fullWidth"
                  {...register("email")}
                />
              </ListItemIcon>
            </ListItem>
          }
        </List>
        <Divider />
        <List>
          {<ButtonChange type="submit">"Enviar alteração"</ButtonChange>}
        </List>
      </form>
    </Box>
  );

  const handleChange = (value) => {
    const token = localStorage.getItem("@KenzieHabits:token") || "";
    const decoded = jwt_decode(token);
    const id = String(decoded.user_id);

    api
      .patch(`/users/${id}/`, value, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Dados atualizados!");
        setState({ right: false });
      })
      .catch((err) => toast.error("Erro na alteração!"));
  };

  return (
    <div>
      {
        <React.Fragment key={anchor}>
          <ButtonNav onClick={toggleDrawer(anchor, true)}>{anchor}</ButtonNav>
          <SwipeableDrawer
            anchor={"right"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}

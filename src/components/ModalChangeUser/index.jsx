import MailIcon from "@mui/icons-material/Mail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonNav } from "./styles";
import jwt_decode from "jwt-decode";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useUser } from "../../providers/User";
import InputTextField from "../InputTextField";
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import BasicButtons from "../Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SwipeableTemporaryDrawer({ anchor, open, setOpen }) {
  const { setUser, setUserName, setOpenDrop } = useUser();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Insira novo usuário")
      .max(18, "Máximo 18 caracters"),
    email: yup.string().required("Insira novo E-mail").email(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleChange = (value) => {
    setOpenDrop(true);
    const token = localStorage.getItem("@KenzieHabits:token") || "";
    const decoded = jwt_decode(token);
    const id = String(decoded.user_id);

    api
      .patch(`/users/${id}/`, value, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        api
          .get(`users/${id}/`)
          .then((response) => {
            setUserName(response.data.username);
            setUser(response.data);
            toast.success("Dados atualizados!");
            setOpen(false);
            setOpenDrop(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => toast.error("Erro na alteração!"));
  };

  return (
    <div>
      <ButtonNav onClick={handleClickOpen}>{anchor}</ButtonNav>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ color: "var(--color-cardAside)" }}
        >
          Alterar nome e email
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(handleChange)}>
          <DialogContent dividers>
            <InputTextField
              label={
                <>
                  <ManageAccountsIcon /> Novo nome de usuário
                </>
              }
              errors={errors.username?.message}
              register={register}
              valueRegister={"username"}
            />
            <InputTextField
              label={
                <>
                  <MailIcon /> Novo E-mail
                </>
              }
              errors={errors.email?.message}
              register={register}
              valueRegister={"email"}
            />
          </DialogContent>
          <DialogActions>
            <BasicButtons type="submit">Enviar alteração</BasicButtons>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}

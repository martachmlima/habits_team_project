import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import BasicButtons from "../Button";
import InputTextField from '../InputTextField'
import { Container } from "./styles";
import { useUser } from "../../providers/User";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {
  List,
  ListItem,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";

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

function EditaActivite({ id }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = yup.object().shape({
    title: yup.string("Digite um novo título").required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { token } = useUser();

  const editActivitie = (data) => {
    api
      .patch(`activities/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Edição feita com sucesso!");
      })
      .catch((err) => console.log(err));
    handleClose();
  };

  return (
    <Container>
      <BasicButtons onClick={handleClickOpen}>Editar</BasicButtons>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Editar Atividade
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit(editActivitie)}>
            <List>
              <ListItem>
                <ListItemIcon
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <InputTextField
                    label='Novo título'
                    errors={errors.title?.message}
                    register={register}
                    valueRegister={"title"}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
            <List>
              <BasicButtons onClick={handleClose} type="submit">Enviar edição</BasicButtons>
            </List>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </Container>
  );
}

export default EditaActivite;
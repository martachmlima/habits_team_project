import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import BasicButtons from "../Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useUser } from "../../providers/User";
import { useGroups } from "../../providers/Groups";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import InputTextField from "../InputTextField";
import { BoxButton, Container, ConteinerUl } from "./styles";

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

export default function CustomizedDialogs({ id }) {
  const [open, setOpen] = React.useState(false);
  const { token, setOpenDrop } = useUser();
  const { setFiltred } = useGroups();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Insira novo nome"),
    description: yup.string().required("Insira nova descrição"),
    category: yup.string().required("Insira nova categoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const editGroup = (data) => {
    setOpenDrop(true);
    api
      .patch(`groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Edição feita com sucesso!");
        setOpenDrop(false);
        setFiltred([]);
      })
      .catch((err) => console.log(err));
    handleClose();
  };

  return (
    <Container>
      <BoxButton>
        <BasicButtons onClick={handleClickOpen}>Editar</BasicButtons>
      </BoxButton>
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
          Editar Grupo
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit(editGroup)}>
            <List>
              {
                <ListItem>
                  <ListItemIcon
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <InputTextField
                      label={<>Novo nome do Grupo</>}
                      errors={errors.name?.message}
                      register={register}
                      valueRegister={"name"}
                    />
                    <InputTextField
                      label={<>Nova categoria do Grupo</>}
                      errors={errors.category?.message}
                      register={register}
                      valueRegister={"category"}
                    />
                    <InputTextField
                      label={<>Nova descrição do Grupo</>}
                      errors={errors.description?.message}
                      register={register}
                      valueRegister={"description"}
                    />
                  </ListItemIcon>
                </ListItem>
              }
            </List>
            <ConteinerUl>
              <BasicButtons type="submit">Salvar alterações</BasicButtons>
            </ConteinerUl>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </Container>
  );
}

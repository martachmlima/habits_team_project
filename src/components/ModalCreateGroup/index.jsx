import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  styled,
} from "@mui/material";
import { Content } from "./styles";
import { useState } from "react";
import { useUser } from "../../providers/User";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BasicButtons from "../Button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = ({ children, onClose, ...rest }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...rest}>
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

const CreateGroup = () => {
  const { createGroup } = useUser();
  const [open, setOpen] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required("Insira o nome do grupo"),
    description: yup.string().required("Insira uma descrição para o grupo"),
    category: yup.string().required("Insira uma categoria"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (data) => {
    data.name !== undefined && createGroup(data);
    setOpen(false);
  };

  return (
    <div>
      <BasicButtons onClick={handleClickOpen}>Criar grupo</BasicButtons>
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
          Criar grupo
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Content>
            <TextField
              sx={{ mb: 1.5 }}
              label={
                errors.name?.message ? errors.name?.message : "Nome do Grupo"
              }
              {...register("name")}
              error={errors.name?.message}
            />
            <TextField
              sx={{ mb: 1.5 }}
              multiline
              maxRows={4}
              label={
                errors.description?.message
                  ? errors.description?.message
                  : "Descrição"
              }
              {...register("description")}
              error={errors.description?.message}
            />
            <TextField
              sx={{ mb: 1.5 }}
              label={
                errors.category?.message
                  ? errors.category?.message
                  : "Categoria"
              }
              {...register("category")}
              error={errors.category?.message}
            />
            <BasicButtons onClick={handleSubmit(handleClose)}>
              Criar
            </BasicButtons>
          </Content>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default CreateGroup;

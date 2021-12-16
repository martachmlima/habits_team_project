import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import {
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
import InputTextField from "../InputTextField";

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
            <InputTextField
              label={"Nome do Grupo"}
              errors={errors.name?.message}
              register={register}
              valueRegister={"name"}
            />
            <InputTextField
              label={"Descrição"}
              errors={errors.description?.message}
              register={register}
              valueRegister={"description"}
            />
            <InputTextField
              label={"Categoria"}
              errors={errors.category?.message}
              register={register}
              valueRegister={"category"}
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

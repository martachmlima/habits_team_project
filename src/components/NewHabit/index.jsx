import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useUser } from "../../providers/User";
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

export default function NewHabit() {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("@KenzieHabits:token") || "";
  const user = JSON.parse(localStorage.getItem("@KenzieHabits:userId")) || "";

  const { habits, setHabits, setOpenDrop } = useUser();

  const formSchema = yup.object().shape({
    title: yup.string().required("Insira um h??bito"),
    category: yup.string().required("Insira uma categoria"),
    difficulty: yup.string().required("Sua dificuldade para este h??bito"),
    frequency: yup.string().required("Sua frequ??ncia com este h??bito"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOnSubmit = (data) => {
    setOpenDrop(true);
    data.user = user.user_id;
    data.how_much_achieved = 0;
    data.achieved = false;
    api
      .post(`/habits/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHabits([...habits, res.data]);
        toast.success("H??bito cadastrado com sucesso!");
        handleClose();
        setOpenDrop(false);
      })
      .catch((err) => toast.error("Erro na cria????o!"));
  };

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab onClick={handleClickOpen} color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
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
          Novo H??bito
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <DialogContent dividers>
            <InputTextField
              label={<>Insira um h??bito</>}
              errors={errors.title?.message}
              register={register}
              valueRegister={"title"}
            />
            <InputTextField
              label={<>Insira uma categoria - ex: sa??de</>}
              errors={errors.category?.message}
              register={register}
              valueRegister={"category"}
            />
            <InputTextField
              label={<>Sua dificuldade para este h??bito</>}
              errors={errors.difficulty?.message}
              register={register}
              valueRegister={"difficulty"}
            />
            <InputTextField
              label={<>Sua frequ??ncia com este h??bito - ex: di??ria</>}
              errors={errors.frequency?.message}
              register={register}
              valueRegister={"frequency"}
            />
          </DialogContent>
          <DialogActions>
            <BasicButtons type="onsubmit">Enviar</BasicButtons>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}

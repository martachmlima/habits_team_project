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
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useUser } from "../../providers/User";
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

export default function NewHabit() {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("@KenzieHabits:token") || "";
  const user = JSON.parse(localStorage.getItem("@KenzieHabits:userId")) || "";

  const { habits, setHabits } = useUser();

  const formSchema = yup.object().shape({
    title: yup.string().required("Insira um hábito"),
    category: yup.string().required("Insira uma categoria"),
    difficulty: yup.string().required("Sua dificuldade para este hábito"),
    frequency: yup.string().required("Sua frequência com este hábito"),
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
    data.user = user.user_id;
    data.how_much_achieved = 0;
    data.achieved = false;
    api
      .post(`/habits/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setHabits([...habits, res.data]);
        toast.success("Hábito cadastrado com sucesso!");
        handleClose();
      })
      .catch((err) => toast.error("Erro na criação!"));
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
          Novo Hábito
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <DialogContent dividers>
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
                errors.title?.message ? (
                  errors.title?.message
                ) : (
                  <>Insira um hábito</>
                )
              }
              error={errors.title?.message}
              id="fullWidth"
              {...register("title")}
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
                errors.category?.message ? (
                  errors.category?.message
                ) : (
                  <>Insira uma categoria - ex: saúde</>
                )
              }
              error={errors.category?.message}
              id="fullWidth"
              {...register("category")}
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
                errors.difficulty?.message ? (
                  errors.difficulty?.message
                ) : (
                  <>Sua dificuldade para este hábito</>
                )
              }
              error={errors.difficulty?.message}
              id="fullWidth"
              {...register("difficulty")}
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
                errors.frequency?.message ? (
                  errors.frequency?.message
                ) : (
                  <>Sua frequência com este hábito - ex: diária</>
                )
              }
              error={errors.frequency?.message}
              id="fullWidth"
              {...register("frequency")}
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

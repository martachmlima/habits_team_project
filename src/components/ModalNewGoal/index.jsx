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
import { ButtonChange } from "../ModalChangeUser/styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useGroups } from "../../providers/Groups";

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

export default function NewGoals() {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("@KenzieHabits:token") || "";
  const user = JSON.parse(localStorage.getItem("@KenzieHabits:userId")) || "";

  const { goals, setGoals, cardGroup } = useGroups();

  const formSchema = yup.object().shape({
    title: yup.string().required("Insira um hábito"),
    difficulty: yup.string().required("Sua dificuldade para este hábito")
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

  const handleOnSubmit = (dado) => {
    dado.how_much_achieved = 0;
    dado.achieved = false;
    dado.group = cardGroup.id;

    const dada = {
      "title": "Teste21",
      "difficulty": "nenhuma",
      "how_much_achieved": 0,
      "achieved": false,
      "group": 923
    }
    
    console.log(dado)
    console.log(dada)

    api
      .post(`/goals/`, dado, {
        headers: { 
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'application/json',
      }})
      .then((res) => {
        console.log(res)
        setGoals([...goals, res.dado]);
        toast.success("Meta cadastrado com sucesso!");
      })
      .catch((err) => {
        console.log(err)
        toast.error("Erro na criação!")
      });
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
        >
          Nova Meta
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
                  <>Insira uma Meta</>
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
                errors.difficulty?.message ? (
                  errors.difficulty?.message
                ) : (
                  <>Sua dificuldade para esta meta</>
                )
              }
              error={errors.difficulty?.message}
              id="fullWidth"
              {...register("difficulty")}
            />

          </DialogContent>
          <DialogActions >
            <ButtonChange type="onsubmit">Cadastrar</ButtonChange>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
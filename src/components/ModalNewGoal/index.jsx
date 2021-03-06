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
import { useGroups } from "../../providers/Groups";
import BasicButtons from "../Button";
import { useUser } from "../../providers/User";
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

export default function NewGoals() {
  const [open, setOpen] = React.useState(false);
  const token = localStorage.getItem("@KenzieHabits:token") || "";

  const { goals, setGoals, cardGroup } = useGroups();
  const { setOpenDrop } = useUser();

  const formSchema = yup.object().shape({
    title: yup.string().required("Insira um h??bito"),
    difficulty: yup.string().required("Sua dificuldade para este h??bito"),
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
    setOpenDrop(true);
    dado.how_much_achieved = 0;
    dado.achieved = false;
    dado.group = cardGroup.id;

    api
      .post(`/goals/`, dado, {
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setGoals([...goals, res.dado]);
        toast.success("Meta cadastrado com sucesso!");
        setOpenDrop(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro na cria????o!");
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
          sx={{ color: "var(--color-cardAside)" }}
        >
          Nova Meta
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <DialogContent dividers>
            <InputTextField
              label={<>Insira uma Meta</>}
              errors={errors.title?.message}
              register={register}
              valueRegister={"title"}
            />
            <InputTextField
              label={<>Sua dificuldade para esta meta</>}
              errors={errors.difficulty?.message}
              register={register}
              valueRegister={"difficulty"}
            />
          </DialogContent>
          <DialogActions>
            <BasicButtons onClick={handleClose} type="onsubmit">
              Cadastrar
            </BasicButtons>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import BasicButtons from "../Button";
import { Container } from "./styles";
import { useUser } from "../../providers/User";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import InputTextField from "../InputTextField";
import {
  List,
  ListItem,
  FormGroup,
  ListItemIcon,
  Dialog,
  Checkbox,
  Box,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  IconButton,
  Slider,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function valuetext(value) {
  return `${value}%`;
}

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

function EditaGoal({ id, done, achieved }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required('Campo obrigatório'),
    difficulty: yup.string().required('Campo obrigatório'),
    achieved: yup.boolean(),
    how_much_achieved: yup.number('Valor inserido deve ser um número').required('Diga quantas vezes vocêconcluiu esta meta')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { token } = useUser();

  const editGoal = (data) => {
    api
      .patch(`goals/${id}/`, data, {
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
          sx={{ color: "var(--color-cardAside)" }}
        >
          Editar Meta
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit(editGoal)}>
            <List>
              {
                <ListItem>
                  <ListItemIcon
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ m: 0, width: 300, height: 30, p: 0 }}>
                      <p>Insira um título</p>
                    </Box>
                    <InputTextField
                      label="Novo título"
                      errors={errors.title?.message}
                      register={register}
                      valueRegister={"title"}
                    />
                     <Box sx={{ m: 0, width: 300, height: 30, p: 0 }}>
                      <p>Nível de dificuldade</p>
                    </Box>
                    <InputTextField
                      label="Novo título"
                      errors={errors.difficulty?.message}
                      register={register}
                      valueRegister={"difficulty"}
                    />
                    <Box sx={{ m: 0, mt: 3, width: 300, height: 30, p: 0 }}>
                      <p>Marque caso tenha concluído</p>
                    </Box>
                    <FormGroup>
                      {done ? (
                        <FormControlLabel
                          control={
                            <Checkbox color="secondary" defaultChecked />
                          }
                          label="Meta alcançada?"
                          error={errors.achieved?.message}
                          {...register("achieved")}
                        />
                      ) : (
                        <FormControlLabel
                          control={<Checkbox color="secondary" />}
                          label="Meta alcançada?"
                          error={errors.achieved?.message}
                          {...register("achieved")}
                        />
                      )}
                      <Box sx={{ m: 0, mt: 3, width: 300, height: 30, p: 0 }}>
                        <p>Marque o seu progresso</p>
                      </Box>
                      <Slider
                        color="secondary"
                        aria-label="Quanto da meta alcançada?"
                        defaultValue={achieved}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        marks
                        min={0}
                        max={30}
                        error={errors.how_much_achieved?.message}
                        {...register("how_much_achieved")}
                      />
                    </FormGroup>
                  </ListItemIcon>
                </ListItem>
              }
            </List>
            <List>
              <BasicButtons onClick={handleClose} type="submit">
                Enviar edição
              </BasicButtons>
            </List>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </Container>
  );
}

export default EditaGoal;

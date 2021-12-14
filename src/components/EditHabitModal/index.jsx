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
import {
  List,
  ListItem,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
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

function CustomizedDialogs({ id, achievedValue }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function valuetext(value) {
    return `${value}%`;
  }

  const formSchema = yup.object().shape({
    achieved: yup.boolean(),
    how_much_achieved: yup
      .number("Valor inserido deve ser um número")
      .required("Diga quantas vezes aderiu ao hábito"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { token } = useUser();

  const editHabit = (data) => {
    api
      .patch(`habits/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
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
          Editar hábito
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <form onSubmit={handleSubmit(editHabit)}>
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
                    <Box sx={{ width: 300 }}>
                      <p>Marque seu progresso!</p>
                    </Box>
                    <FormGroup>
                      <Slider
                        color="secondary"
                        aria-label="Quanto da meta alcançada?"
                        defaultValue={achievedValue}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={100}
                        error={errors.how_much_achieved?.message}
                        {...register("how_much_achieved")}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Meta alcançada?"
                        error={errors.achieved?.message}
                        {...register("achieved")}
                      />
                    </FormGroup>
                  </ListItemIcon>
                </ListItem>
              }
            </List>
            <Divider />
            <List>
              <BasicButtons type="submit">Enviar edição</BasicButtons>
            </List>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </Container>
  );
}

export default CustomizedDialogs;

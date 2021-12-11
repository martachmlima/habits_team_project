import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { List, ListItem, ListItemIcon, TextField } from "@mui/material";
import BasicButtons from "../Button";
import { useUser } from "../../providers/User";
import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Divider } from "@mui/material";
import toast from "react-hot-toast";

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

function CustomizedDialogs({ id }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
    <div>
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
                        mt: 3,
                      }}
                      fullWidth
                      label="% de objetivo atingida"
                      error={errors.how_much_achieved?.message}
                      id="fullWidth"
                      {...register("how_much_achieved")}
                    />

                    <TextField
                      type="checkbox"
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
                      label="Atingiu seus objetivos?"
                      error={errors.achieved?.message}
                      id="fullWidth"
                      {...register("achieved")}
                    />
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
    </div>
  );
}

export default CustomizedDialogs;

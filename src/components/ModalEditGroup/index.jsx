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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  TextField,
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

export default function CustomizedDialogs({ id }) {
  const [open, setOpen] = React.useState(false);
  const { token } = useUser();

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
    api
      .patch(`groups/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Edição feita com sucesso!");
      })
      .catch((err) => console.log(err));
    handleClose();
  };

  return (
    <div>
      <BasicButtons
        style={{
          color: "var(--dark-purple)",
          backgroundColor: "var(--secondary-purple)",
          width: "200px",
          fontSize: "1rem",
          height: "36px",
        }}
        onClick={handleClickOpen}
      >
        Editar
      </BasicButtons>
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
                      label={
                        errors.name?.message ? (
                          errors.name?.message
                        ) : (
                          <p>Novo nome do Grupo</p>
                        )
                      }
                      error={errors.name?.message}
                      id="fullWidth"
                      {...register("name")}
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
                          <p>Nova categoria do Grupo</p>
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
                        errors.description?.message ? (
                          errors.description?.message
                        ) : (
                          <p>Nova descrição do Grupo</p>
                        )
                      }
                      error={errors.description?.message}
                      id="fullWidth"
                      {...register("description")}
                    />
                  </ListItemIcon>
                </ListItem>
              }
            </List>
            <BasicButtons type="submit">Salvar alterações</BasicButtons>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";
import dogWalk from "../../assets/dogWalk.svg";
import { Container, ContainedForm, StyledForm, ContainedSvg } from "./styles";

const LogIn = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitLogin = (data) => {
    api
      .post("sessions/", data)
      .then((response) => {
        const { access } = response.data;
        localStorage.setItem("@KenzieHabits:token", JSON.stringify(access));

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Dados incorretos"));
  };
  return (
    <Container>
      <ContainedSvg>
        <h1>
          Gest <span>Habit</span>
        </h1>
        <img src={dogWalk} alt="dogWalk" />
      </ContainedSvg>
      <ContainedForm>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
          <TextField
            sx={{
              "& input:valid + fieldset": {
                borderRadius: "12px",
                height: 76,
              },
              label: {
                lineHeight: "40px",
              },
              background: "#EEE3F3",
              borderRadius: "12px",
              height: 70,
              boxShadow: "4px 4px 20px 6px rgba(122, 121, 121, 0.25)",
            }}
            label="Usuário"
            variant="outlined"
            {...register("username")}
          />
          <TextField
            sx={{
              "& input:valid + fieldset": {
                borderRadius: "12px",
                height: 76,
              },
              label: {
                lineHeight: "40px",
              },
              background: "#EEE3F3",
              borderRadius: "12px",
              height: 70,
              boxShadow: "4px 4px 20px 6px rgba(122, 121, 121, 0.25)",
            }}
            label="Senha"
            variant="outlined"
            {...register("password")}
            helperText={errors.password?.mesage || ""}
          />
          <Button
            sx={{
              background: "#D8BBE3",
              color: "#9320C2",
              borderRadius: "12px",
              height: 70,
              fontSize: "24px",
              textTransform: "none",
              boxShadow: "4px 4px 20px 6px rgba(122, 121, 121, 0.25)",
            }}
            variant="contained"
            type="submit"
          >
            Entrar
          </Button>
          <span> Não possui cadastro? </span>
          <Button
            sx={{
              background: "#9C27B0",
              color: "#D8CDCD",
              borderRadius: "12px",
              height: 70,
              fontSize: "24px",
              textTransform: "none",
              boxShadow: "4px 4px 20px 6px rgba(122, 121, 121, 0.25)",
            }}
            variant="contained"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Cadastrar
          </Button>
        </StyledForm>
      </ContainedForm>
    </Container>
  );
};

export default LogIn;

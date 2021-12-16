import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import dogWalk from "../../assets/dogWalk.svg";
import { Container, ContainedForm, StyledForm, ContainedSvg } from "./styles";
import { useUser } from "../../providers/User";
import InputTextField from "../../components/InputTextField";

const LogIn = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { signIn } = useUser();
  const onSubmitLogin = (data) => {
    signIn(data).catch((err) => toast.error("Algo deu errado tente novamente"));
  };
  return (
    <Container>
      <ContainedSvg>
        <h1 onClick={() => history.push("/")}>
          Gest <span>Habit</span>
        </h1>
        <img src={dogWalk} alt="dogWalk" />
      </ContainedSvg>
      <ContainedForm>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
          <InputTextField
            label="usuário"
            register={register}
            valueRegister={"username"}
          />
          <InputTextField
            label="Senha"
            register={register}
            valueRegister={"password"}
            type="password"
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

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import image from "../SignUp/SvgCabeça.png";
import api from "../../services/api";
import toast from "react-hot-toast";
import * as React from "react";
import TextField from "@mui/material/TextField";
import {
  Conteiner,
  ConteinerImg,
  ConteinerTitle,
  ConteinerForm,
  ConteinerFormGradient,
  Button,
} from "./styles";

const SignUp = () => {
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Usuário obrigatório")
      .max(18, "Máximo 18 caracters"),
    email: yup.string().required("E-mail obrigatório").email(),
    confirmEmail: yup
      .string()
      .required("Confirmação do E-mail obrigatória")
      .email()
      .oneOf([yup.ref("email")], "E-mails não são iguais!"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Maiúsculas, minúsculas, especiais %$#@%, min 8 ou +"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas não são iguais!"),
    terms: yup
      .boolean()
      .oneOf([true], "É necessário aceitar os termos para continuar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleRegister = (data) => {
    const { username, email, password } = data;
    const output = {
      username: username,
      email: email,
      password: password,
    };
    api
      .post("/users/", output)
      .then((response) => {
        console.log(response.data);
        toast.success("Conta cadastrada com sucesso!");
        history.push("/login");
      })
      .catch((err) => toast.error("Usuário já existe!"));
  };

  return (
    <Conteiner>
      <ConteinerImg>
        <ConteinerTitle>
          <h1>Gest</h1>
          <h2>Habit</h2>
        </ConteinerTitle>
        <img src={image} alt="" />
      </ConteinerImg>

      <ConteinerForm>
        <ConteinerFormGradient>
          <form onSubmit={handleSubmit(handleRegister)}>
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
                errors.username?.message
                  ? errors.username?.message
                  : "Nome de usuário"
              }
              error={errors.username?.message}
              id="fullWidth"
              {...register("username")}
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
              label={errors.email?.message ? errors.email?.message : "Email"}
              error={errors.email?.message}
              id="fullWidth"
              {...register("email")}
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
                errors.confirmEmail?.message
                  ? errors.confirmEmail?.message
                  : "Confirme seu E-mail"
              }
              error={errors.confirmEmail?.message}
              id="fullWidth"
              {...register("confirmEmail")}
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
                errors.password?.message ? errors.password?.message : "Senha"
              }
              type="password"
              error={errors.password?.message}
              id="fullWidth"
              {...register("password")}
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
              id="fullWidth"
              type="password"
              fullWidth
              label={
                errors.confirmPassword?.message
                  ? errors.confirmPassword?.message
                  : "Confirme sua senha"
              }
              error={errors.confirmPassword?.message}
              id="fullWidth"
              {...register("confirmPassword")}
            />

            <Button type="submit">Enviar</Button>
          </form>
        </ConteinerFormGradient>
      </ConteinerForm>
    </Conteiner>
  );
};

export default SignUp;

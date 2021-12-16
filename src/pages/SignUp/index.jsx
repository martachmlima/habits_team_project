import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import image from "../SignUp/SvgCabeça.png";
import api from "../../services/api";
import toast from "react-hot-toast";
import * as React from "react";
import {
  Container,
  ConteinerForm,
  ConteinerFormGradient,
  ContainedSvg,
  ConteinerBox,
} from "./styles";
import { Link } from "react-router-dom";
import InputTextField from "../../components/InputTextField";

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
        toast.success("Conta cadastrada com sucesso!");
        history.push("/login");
      })
      .catch((err) => toast.error("Usuário já existe!"));
  };

  return (
    <Container>
      <ConteinerBox>
        <ContainedSvg>
          <h1 onClick={() => history.push("/")}>
            Gest <span>Habit</span>
          </h1>
          <img src={image} alt="conexao" />
        </ContainedSvg>

        <ConteinerForm>
          <ConteinerFormGradient>
            <form onSubmit={handleSubmit(handleRegister)}>
              <InputTextField
                label={
                  errors.username?.message
                    ? errors.username?.message
                    : "Nome de usuário"
                }
                errors={errors.username?.message}
                register={register}
                valueRegister={"username"}
              />
              <InputTextField
                label={errors.email?.message ? errors.email?.message : "Email"}
                errors={errors.email?.message}
                error={errors.email?.message}
                register={register}
                valueRegister={"email"}
              />
              <InputTextField
                label={
                  errors.confirmEmail?.message
                    ? errors.confirmEmail?.message
                    : "Confirme seu E-mail"
                }
                errors={errors.confirmEmail?.message}
                register={register}
                valueRegister={"confirmEmail"}
              />

              <InputTextField
                label={
                  errors.password?.message ? errors.password?.message : "Senha"
                }
                type="password"
                errors={errors.password?.message}
                register={register}
                valueRegister={"password"}
              />
              <InputTextField
                label={
                  errors.confirmPassword?.message
                    ? errors.confirmPassword?.message
                    : "Confirme sua senha"
                }
                type="password"
                errors={errors.confirmPassword?.message}
                register={register}
                valueRegister={"confirmPassword"}
              />
              <button type="submit">Enviar</button>
              <Link to="/login">Possui conta? Faça LOGIN</Link>
            </form>
          </ConteinerFormGradient>
        </ConteinerForm>
      </ConteinerBox>
    </Container>
  );
};

export default SignUp;

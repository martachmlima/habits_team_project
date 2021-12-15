import { TextField } from "@mui/material";
import { Conteiner } from "./styles";

const InputTextField = ({ errors, label, register, valueRegister }) => {
  return (
    <Conteiner>
      <TextField
        color="secondary"
        sx={{
          "& input:valid + fieldset": {
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 75,
          },
          filter: "drop-shadow(0px 4px 4px var(--preto-opacity))",
          bgcolor: "var(--branco)",
          borderRadius: 3,
          height: 70,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
        fullWidth
        label={errors ? errors : label}
        error={errors}
        id="fullWidth"
        {...register(valueRegister)}
      />
    </Conteiner>
  );
};

export default InputTextField;
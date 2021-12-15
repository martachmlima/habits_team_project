import { TextField } from "@mui/material";

const InputTextField = ({ errors, label, register, valueRegister }) => {
  return (
    <>
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
        label={errors ? errors : label}
        error={errors}
        id="fullWidth"
        {...register(valueRegister)}
      />
    </>
  );
};

export default InputTextField;

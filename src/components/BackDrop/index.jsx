import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useUser } from "../../providers/User";

const BackDrop = () => {
  const { openDrop, setOpenDrop } = useUser();
  const handleClose = () => {
    setOpenDrop(false);
  };
  return (
    <>
      <Backdrop
        sx={{
          color: "var(--secundary-green)",
          zIndex: (theme) => theme.zIndex.drawer + 100000,
        }}
        open={openDrop}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
export default BackDrop;

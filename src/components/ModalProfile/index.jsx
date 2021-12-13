import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalRight from "../ModalChangeUser";
import { ConteinerNav } from "./styles";
import { ButtonNav } from "../ModalChangeUser/styles";
import { useUser } from "../../providers/User";

const ModalProfile = ({ children }) => {
  const { signOut } = useUser();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <ConteinerNav open={open}>
        <Accordion>
          <AccordionSummary
            aria-expanded={open}
            onClick={handleOpen}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{children}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ModalRight anchor={"Alterar dados"} />
              <ButtonNav onClick={signOut}>Sair</ButtonNav>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ConteinerNav>
    </>
  );
};
export default ModalProfile;

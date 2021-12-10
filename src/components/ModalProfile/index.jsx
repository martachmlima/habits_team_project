import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalRight from "../ModalTop";
import { ConteinerNav } from "./styles";
import { ButtonNav } from "../ModalTop/styles";
import { useHistory } from "react-router-dom";

const ModalProfile = ({ children }) => {
  const history = useHistory();
  const handleClear = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <>
      <ConteinerNav>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>{children}</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              <ModalRight anchor={"Alterar dados da conta"} />
              <ButtonNav onClick={handleClear}>Sair</ButtonNav>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ConteinerNav>
    </>
  );
};
export default ModalProfile;

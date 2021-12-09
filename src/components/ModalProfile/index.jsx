import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModalRight from "../ModalTop";
import { ConteinerNav } from "./styles";
import { ProfileContainer } from "../Header/style";
import { Avatar } from "@mui/material";
const ModalProfile = ({ children }) => {
  return (
    <>
      <ConteinerNav>
        <Accordion onClick={console.log("oi")}>
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
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ConteinerNav>
    </>
  );
};
export default ModalProfile;

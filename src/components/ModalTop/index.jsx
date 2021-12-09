import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function SwipeableTemporaryDrawer({ anchor }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleSubmit = (value) => {
    toggleDrawer(value, false);
    console.log("teste");
  };

  const list = (anchor) => (
    <Box
      sx={{
        height: 500,
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
    >
      <List sx={{ width: "50%", m: "0 auto" }}>
        {["Novo usuário", "Novo E-mail"].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <MailIcon /> : <ManageAccountsIcon />}

              {/* onClick={toggleDrawer(anchor, false)} */}
            </ListItemIcon>
            <input type="text" placeholder={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {
          <ListItem button onClick={() => handleSubmit(anchor)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Enviar alteração"} />
          </ListItem>
        }
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={"top"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}

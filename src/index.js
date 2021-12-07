import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/User";
import { GroupsProvider } from "./providers/Groups";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <GroupsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GroupsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

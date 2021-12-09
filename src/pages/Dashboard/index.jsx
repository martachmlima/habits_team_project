import { Avatar } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import { ProfileContainer } from "../../components/Header/style";
import ModalProfile from "../../components/ModalProfile";
import ModalRight from "../../components/ModalTop";
import SwipeableTemporaryDrawer from "../../components/ModalTop";

const Dashboard = () => {
  return (
    <div>
      <Header path="dashboard" userName="Marta Lima" />
      Dashboard
    </div>
  );
};

export default Dashboard;

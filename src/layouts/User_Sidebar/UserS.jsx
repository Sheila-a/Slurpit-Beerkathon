import React from "react";
import Dash from "../../components/Dash/Dash";
import design from "./style.module.css";
import {
  AccountCircle,
  NotificationImportant,
  Settings,
} from "@mui/icons-material";
import { Dashboard } from "@mui/icons-material";
const Admin_Sidebar = () => {
  return (
    <div className={design.cont}>
      <h1 className={design.title}>SLURPIT</h1>
      <Dash name="Dashboard" ico={<Dashboard />} />
      <Dash name="Profile" ico={<AccountCircle />} />
      <Dash name="Notifications" ico={<NotificationImportant />} />
      <Dash name="Settings" ico={<Settings />} />
    </div>
  );
};

export default Admin_Sidebar;

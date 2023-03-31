import React from "react";
import UserS from "../../layouts/User_Sidebar/UserS";
import UserM from "../../layouts/User_Main/UserM";
import design from "./style.module.css";

const Userdb = () => {
  return (
    <div className={design.cont}>
      <UserS />
      <UserM />
    </div>
  );
};

export default Userdb;

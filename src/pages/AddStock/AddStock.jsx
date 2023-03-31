import React from "react";
import UserS from "../../layouts/User_Sidebar/UserS";
import AddMain from "../../layouts/Add_Main/AddMain";
import design from "./style.module.css";

const AddStock = () => {
  return (
    <div className={design.cont}>
      <UserS />
      <AddMain />
    </div>
  );
};

export default AddStock;

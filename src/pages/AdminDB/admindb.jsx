import React from "react";
import AdminMain from "../../layouts/Admin_Main/Admin_Main";
import AdminSidebar from "../../layouts/Admin_Sidebar/Admin_Sidebar";
import design from "./style.module.css";

const Admindb = () => {
  return (
    <div className={design.cont}>
      <AdminSidebar />
      <AdminMain />
    </div>
  );
};

export default Admindb;

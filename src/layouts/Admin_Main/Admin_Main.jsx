import {
  NotificationsActiveRounded,
  Portrait,
  Cached,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Date from "../../components/Date/Date";
import Searchh from "../../components/Search/Search";
import { Cards } from "../../components/DB_Cards/DB_Cards";
import { Blue, Green, Yellow, Pink } from "../../assets/img";
import { Link } from "react-router-dom";
import AdminP from "../../components/Admin_Popup/AdminP";
import design from "./style.module.css";

const Admin_Main = () => {
  const [productData, setProductData] = useState([]);
  const [rows, setRows] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // state to keep track of whether to show the popup or not

  const handleRowClick = () => {
    setShowPopup(true); // set showPopup state to true when a row is clicked
  };

  // const handleClosePopup = () => {
  //   setShowPopup(false); // set showPopup state to false when the popup is closed
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://slurpit.onrender.com/api/v1/product"
      );
      const data = await response.json();
      setProductData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  console.log(typeof productData);

  useEffect(() => {
    const newRows = [];
    for (const productId in productData.data) {
      const product = productData.data[productId];
      newRows.push(
        createData(
          product._id,
          product.name,
          product.quantity,
          product.category,
          product.daysToRunOut,
          product.status
        )
      );
    }
    setRows(newRows);
  }, [productData]);

  function createData(_id, name, quantity, category, daysToRunOut, status) {
    return { _id, name, quantity, category, daysToRunOut, status };
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={design.cont}>
      <div className={design.nav}>
        <Date />
        <Searchh />
        <div className={design.nav_right}>
          <button onClick={handleRefresh} className={design.refresh}>
            <span>
              <Cached />
            </span>
            Refresh
          </button>
          <NotificationsActiveRounded />
          <div className={design.NV_right}>
            <Portrait />
            <p>Slurpit</p>
          </div>
        </div>
      </div>
      <div className={design.dwmy}>bread</div>
      <div className={design.cardss}>
        <Cards
          title="Total Stock Unit"
          value="30"
          className={design.crd_1}
          img={Blue}
        />
        <Cards
          title="Available Stock "
          value="30"
          className={design.crd_2}
          img={Green}
        />
        <Cards
          title="Low Stock"
          value="30"
          className={design.crd_3}
          img={Yellow}
        />
        <Cards
          title="Unavailable Stock"
          value="30"
          className={design.crd_4}
          img={Pink}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Stock Id</th>
            <th>Product name</th>
            <th>Categories</th>
            <th>Days until stockout</th>
            <th>Qty remaining </th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} onClick={handleRowClick}>
              <td>{row._id}</td>
              <td>{row.name}</td>
              <td>{row.category}</td>
              <td>{row.daysToRunOut}</td>
              <td>{row.quantity}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className={design.adminp_overlay}>
          <AdminP />
        </div>
      )}
    </div>
  );
};

export default Admin_Main;

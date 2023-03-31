import React, { useState, useEffect } from "react";

import { Beer } from "../../assets/img";
import Button from "../../components/Button/button";
import design from "./style.module.css";

const AdminP = () => {
  const [productData, setProductData] = useState([]);
  const [rows, setRows] = useState([]);
  const handleRefresh = () => {
    const currentUrl = window.location.href;
    window.location = currentUrl;
  };

  const handleAdd = () => {
    window.location = "https://slurpit-innovateher.netlify.app/add_stock";
  };
  const handleCheckout = () => {
    window.location = "https://slurpit-innovateher.netlify.app/checkout_stock";
  };

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
          product.category
        )
      );
    }
    setRows(newRows);
  }, [productData]);

  function createData(_id, name, quantity, category) {
    return { _id, name, quantity, category };
  }
  return (
    <>
      {rows.map((row, index) => (
        <div className={design.pop} key={index}>
          <img src={Beer} alt="drink" className={design.drink} />
          <div className={design.cover}>
            <h3 className={design.thrills}>{row.name}</h3>
            <div className={design.enclose}>
              <p>{row.status}</p>
            </div>
          </div>
          <p className={design.carton}> Cartons left</p>
          <p className={design.carton}>{row.daysToRunOut} days to stockout</p>
          <div className={design.center}>
            <div className={design.level} onClick={handleAdd}>
              <p>Add Stock</p>
            </div>
            <div className={design.history} onClick={handleCheckout}>
              <p>Checkout Stock </p>
            </div>
          </div>
          <Button name="Back" onClick={handleRefresh} className={design.back} />
        </div>
      ))}
    </>
  );
};

export default AdminP;

import React, { useState } from "react";
import design from "./style.module.css";
import Button from "../../components/Button/button";

const AddMain = () => {
  const [quantity, setQuantity] = useState(0);
  const [productName, setProductName] = useState("");
  const [error, setError] = useState("");

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!quantity || !productName) {
      setError("Please fill in all fields.");
      return;
    }
    const data = {
      productName: productName,
      quantity: quantity,
    };
    try {
      const response = await fetch(
        "https://slurpit.onrender.com/api/v1/product/add",
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={design.cont}>
      <form className={design.card}>
        <h2>ADD STOCK</h2>
        {error && <p className={design.error}>{error}</p>}
        <div className={design.fields}>
          {" "}
          <p>Product name</p>
          <input
            type="text"
            placeholder="Enter product name..."
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
          />
        </div>
        <div className={design.fields}>
          {" "}
          <p>Quantity(carton)</p>
          <input
            type="numbers"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
          />
        </div>
        <Button
          className={design.btn}
          name="Continue"
          onClick={handleContinue && }
        />
      </form>
    </div>
  );
};

export default AddMain;

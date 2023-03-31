import React from "react";
import design from "./style.module.css";

export const Cards = (props) => {
  return (
    <div
      className={props.className}
      style={{
        borderRadius: "10px",
        marginLeft: "5vh",
        display: "flex",
        alignItem: "center",
      }}
    >
      <img src={props.img} alt="" className={design.img} />
      <div className={design.info}>
        <h5>{props.title}</h5>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

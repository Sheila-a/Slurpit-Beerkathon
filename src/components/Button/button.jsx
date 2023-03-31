import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      style={{ borderRadius: "10px", padding: "15px 20px", border: "none" }}
    >
      {props.name}
    </button>
  );
};

export default Button;

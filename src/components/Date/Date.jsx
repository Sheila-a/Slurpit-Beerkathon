import React, { useState } from "react";
import design from "./style.module.css";

const Date = () => {
  const [selectDate, setSelectDate] = useState(null);
  const handleDateChange = (e) => {
    setSelectDate(e.target.value);
  };
  return (
    <div>
      <input
        type="date"
        onChange={handleDateChange}
        value={selectDate}
        className={design.input}
      />
    </div>
  );
};

export default Date;

import React, { useState } from "react";
import Button from "../Button/button";
import design from "./style.module.css";
import { Link } from "react-router-dom";
// 642590d67a5ab436386ccee2
const Sup = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [error, setError] = useState("");

  console.log(setFullName, setCompanyEmail, error);
  const handleMove = () => {
    window.location = "https://slurpit-innovateher.netlify.app/admin_dashboard";
  };
  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!fullName || !companyEmail || !employeeId || !password) {
      setError("Please fill in all fields.");
      return;
    }
    const data = {
      employeeId: employeeId,
      password: password,
    };
    try {
      const response = await fetch("https://slurpit.onrender.com/api/v1/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((error) => {
          console.error(error);
        });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={design.cont}>
      <div className={design.card}>
        <form onSubmit={handleContinue}>
          <div className={design.title}>
            <h2>Create New Account</h2>
            <p>Please register and fill your details</p>
          </div>
          <div className={design.fields}>
            <p>Full Name</p>
            <input type="text" name="fullName" />
          </div>
          <div className={design.fields}>
            <p>Company email</p>
            <input type="email" name="companyEmail" />
          </div>
          <div className={design.fields}>
            <p>Employee ID</p>
            <input
              type="text"
              name="employeeId"
              value={employeeId}
              onChange={handleEmployeeIdChange}
            />
          </div>
          <div className={design.fields}>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <input type="checkbox" name="remember" id="rem" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <Button
            className={design.btn}
            name="Continue"
            onClick={handleContinue && handleMove}
          />
        </form>
        <p className={design.p}>
          Already have an account?{" "}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sup;

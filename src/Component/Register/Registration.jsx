import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Login from "../Login/Login";
import "../Register/Registration.css";

function Registration() {
  let [RegistrationData, SetRegistrationData] = useState({
    username: "",
    password: "",
    Email: "",
    FullName: "",
  });       

  let RegistrationChange = (e) => {
    let { name, value } = e.target;

    SetRegistrationData((PrevData) => ({
      ...PrevData,
      [name]: value,
    }));
  };

  let RegistrationFromSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:8000/register",RegistrationData);
      let {message } = response.data;

      if (response.status ===201) {
        console.log (message);
        alert("Registration Successfully");
      } else {
        console.log(error);
      }
    } catch (error) {
      alert("This User name alredy exist");
      
    }
    SetRegistrationData({
      username: "",
      password: "",
      Email: "",
      FullName: "",
    })
  };

  return (
    <div className="main">
      <h1>Registration-Page</h1>
      <form onSubmit={RegistrationFromSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={RegistrationData.username}
          onChange={RegistrationChange}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={RegistrationData.password}
          onChange={RegistrationChange}
          required
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          name="Email"
          value={RegistrationData.Email}
          onChange={RegistrationChange}
          required
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Full Name"
          name="FullName"
          value={RegistrationData.FullName}
          onChange={RegistrationChange}
          required
        />
        <br />
        <br />

        <button type="Submit">Register</button>

        <p>
          {" "}
          Already Account:- <Link to="/login"> Please Login</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Registration;

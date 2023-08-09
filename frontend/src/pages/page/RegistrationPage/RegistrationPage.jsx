import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    var data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/register",
      data: data,
    };

    axios(config)
      .then(function (response) {
        alert(
          response.data.data.name +
            ", you have successfuly registered! Proceed to login!"
        );
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section class="home">
      <div class="form_container">
        <i class="uil uil-times form_close"></i>
        <div class="form signup_form">
          <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <div class="input_box">
              <input
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <i class="uil uil-envelope-alt email"></i>
            </div>
            <div class="input_box">
              <input
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <i class="uil uil-envelope-alt email"></i>
            </div>
            <div class="input_box">
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Create password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <i class="uil uil-lock password"></i>
              <i class="uil uil-eye-slash pw_hide"></i>
            </div>
            <button class="button">Signup Now</button>
            <div class="login_signup">
              Already have an account? <Link to="/login"> Login here </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationPage;

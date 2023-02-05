import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./Registration.css";

function RegistrationPage() {
  return (
    <div className="registrationPage">
      <link
        rel="stylesheet"
        href="fonts/material-icon/css/material-design-iconic-font.min.css"
      />

      <div className="main">
        <section className="signup">
          <div className="containerRegister">
            <div className="signup-content">
              <form id="signup-form" className="signup-form">
                <h1 className="form-title">Create account</h1>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <span
                    toggle="#password"
                    className="zmdi zmdi-eye field-icon toggle-password"
                  ></span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="re_password"
                    id="re_password"
                    placeholder="Repeat your password"
                  />
                </div>
                <div className="form-group">
                  <input
                    onClick={(e) => {
                      e.preventDefault();
                      window.location = "http://localhost:3000/login";
                    }}
                    type="submit"
                    name="submit"
                    id="submit"
                    className="form-submit"
                    value="Sign up"
                  />
                </div>
              </form>
              <p className="loginhere">
                Have already an account ?{" "}
                <Link to="/login" className="loginhere-link">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>

      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="js/main.js"></script>
    </div>
  );
}

export default RegistrationPage;

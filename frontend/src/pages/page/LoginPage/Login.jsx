import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    var data = new FormData();
    data.append("email", email);
    data.append("password", password);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/login",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        let bigToken = response.data.token;
        let tokenParts = bigToken.split("|");
        let token = tokenParts[1];
        sessionStorage.setItem("token", token);
        sessionStorage.setItem(
          "logged_user",
          JSON.stringify(response.data.user)
        );
        let profilePicture =
          "https://xsgames.co/randomusers/assets/avatars/pixel/" +
          response.data.user.id +
          ".jpg";
        sessionStorage.setItem("profile_image", profilePicture);
        if (response.data.user.email == "admin@gmail.com") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 401) {
          alert("invalid email password combination");
        }
      });
  };

  return (
    <section class="home">
      <div class="form_container">
        <i class="uil uil-times form_close"></i>
        <div class="form login_form">
          <form class="form login_form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div class="input_box">
              <input
                name="email"
                id="user"
                type="email"
                required
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <i class="uil uil-envelope-alt email"></i>
            </div>
            <div class="input_box">
              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i class="uil uil-lock password"></i>
              <i class="uil uil-eye-slash pw_hide"></i>
            </div>
            <button class="button">Login Now</button>
            <div class="login_signup">
              Don't have an account? <Link to="/register">Sign up!</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;

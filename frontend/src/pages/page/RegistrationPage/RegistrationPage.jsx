import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../../components/Header/Header"
import "./Registration.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function RegistrationPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    var data = new FormData()
    data.append("name", name)
    data.append("email", email)
    data.append("password", password)

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/register",
      data: data,
    }

    axios(config)
      .then(function (response) {
        alert(response.data.data.name + ", you have successfuly registered! Proceed to login!")
        navigate("/login")
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="registrationPage">
      <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css" />

      <div className="main">
        <section className="signup">
          <div className="containerRegister">
            <div className="signup-content">
              <form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
                <h1 className="form-title">Create account</h1>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    toggle="#password"
                    className="zmdi zmdi-eye field-icon toggle-password"
                  ></span>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-submit">
                    Register
                  </button>
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
  )
}

export default RegistrationPage

import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    var data = new FormData()
    data.append("email", email)
    data.append("password", password)

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/login",
      data: data,
    }

    axios(config)
      .then(function (response) {
        let bigToken = response.data.token
        let tokenParts = bigToken.split("|")
        let token = tokenParts[1]
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("logged_user", JSON.stringify(response.data.user))
        let profilePicture =
          "https://xsgames.co/randomusers/assets/avatars/pixel/" + response.data.user.id + ".jpg"
        sessionStorage.setItem("profile_image", profilePicture)
        if (response.data.user.email == "admin@gmail.com") {
          navigate("/admin")
        } else {
          navigate("/")
        }
      })
      .catch(function (error) {
        console.log(error)
        if (error.response.status == 401) {
          alert("invalid email password combination")
        }
      })
  }

  return (
    <div className="loginPage">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      ></link>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="card m-auto">
            <div className="card-header">
              <h3>Sign in!</h3>
              <div className="d-flex justify-content-end social_icon">
                <span>
                  <i className="fab fa-facebook-square"></i>
                </span>
                <span>
                  <i className="fab fa-google-plus-square"></i>
                </span>
                <span>
                  <i className="fab fa-twitter-square"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    name="email"
                    id="user"
                    type="email"
                    class="form-control"
                    required
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    required
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn float-right login_btn">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Not a member? <Link to="/register">Sign up!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </div>
  )
}

export default LoginPage

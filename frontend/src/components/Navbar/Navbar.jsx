import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleNavbar = () => setToggleMenu(!toggleMenu)

  let navigate = useNavigate()

  function items() {
    if (sessionStorage.length == 0) {
      return (
        <>
          <li className="nav-item">
            <Link to="/register" className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1">
              register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1">
              login
            </Link>
          </li>
        </>
      )
    } else {
      return (
        <>
          {" "}
          <li className="nav-item">
            <button
              onClick={handleLogout}
              className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1"
            >
              logout
            </button>
          </li>
        </>
      )
    }
  }

  async function handleLogout() {
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        sessionStorage.clear()
        navigate("/")
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container" style={{ display: "flex" }}>
        <div className="brand-and-toggler flex flex-sb">
          <span className="text-uppercase fw-7 fs-24 ls-1">Book store</span>
          <button type="button" className="navbar-toggler-btn" onClick={handleNavbar}>
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1">
                books
              </Link>
            </li>
            {items()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

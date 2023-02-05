import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container" style={{ display: "flex" }}>
        <div className="brand-and-toggler flex flex-sb">
          <span className="text-uppercase fw-7 fs-24 ls-1">Library</span>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/books"
                className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1"
              >
                books
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1"
              >
                signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-link text-uppercase text-purple fs-22 fw-6 ls-1"
              >
                signin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

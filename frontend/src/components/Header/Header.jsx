import React from "react"
import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import "./Header.css"

const Header = ({ navbar }) => {
  const showSearchForm = () => {
    if (
      sessionStorage.length != 0 &&
      JSON.parse(sessionStorage.getItem("logged_user")).email == "admin@gmail.com"
    ) {
      return <></>
    } else {
      return (
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find your book of choice.</h2>
          <br />
          <p className="header-text fs-18 fw-3"></p>
          <SearchForm />
        </div>
      )
    }
  }
  return (
    <div className="holder">
      <header className="header">{navbar ? <Navbar /> : <></>}</header>
      {showSearchForm()}
    </div>
  )
}

export default Header

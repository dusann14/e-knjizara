import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import "./SearchForm.css"

const SearchForm = () => {
  let navigate = useNavigate()
  const [searchText, setSearchText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/books/" + searchText)
  }

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form-elem flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Author ..."
                onChange={handleChange}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-purple" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm

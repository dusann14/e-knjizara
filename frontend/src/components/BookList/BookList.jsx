import React, { useState, useEffect } from "react"
import Book from "../BookList/Book"
import "./BookList.css"
import axios from "axios"

const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAllBooks()
      setBooks(response.data)
    }
    fetchData()
  }, [])

  if (books.length == 0) {
    return <div class="load"></div>
  }

  return (
    <section className="booklist">
      <div className="container">
        <div className="booklist-content grid">
          {books.map((item, index) => {
            return <Book key={index} book={item} />
          })}
        </div>
      </div>
    </section>
  )
}

async function getAllBooks() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/books",
  }

  let res = axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data))
      return response.data
    })
    .catch(function (error) {
      // console.log(error)
      return error
    })

  return res
}

export default BookList

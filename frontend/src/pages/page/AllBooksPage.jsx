import React, { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import BookList from "../../components/BookList/BookList"
import axios from "axios"

function AllBooksPage() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await getAllBooks()
      setBooks(response.data)
    }
    fetchData()
  }, [])

  if (books.length == 0) {
    return (
      <div>
        <Header navbar={true} />
        <div class="load"></div>
      </div>
    )
  }

  return (
    <div>
      <Header navbar={true} />
      <div className="books">
        <BookList books={books} />
      </div>
    </div>
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

export default AllBooksPage

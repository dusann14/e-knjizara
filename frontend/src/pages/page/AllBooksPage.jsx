import React, { useState, useEffect } from "react"
import Header from "../../components/Header/Header"
import BookList from "../../components/BookList/BookList"
import axios from "axios"
import { useParams } from "react-router-dom"

function AllBooksPage() {
  const { author } = useParams()
  const [books, setBooks] = useState([])

  const [fetchingDoneAndDataIsEmpty, setEmpty] = useState(false)

  useEffect(() => {
    async function fetchData() {
      var response
      if (author == undefined) {
        response = await getAllBooks()
        console.log("ucitava sve knjige")
      } else {
        response = await getBooksBySpecifiedAuthor(author)
      }
      console.log(response)
      if (response.status == 200) {
        setBooks(response.data.data)
      } else {
        setEmpty(true)
      }
    }
    fetchData()
  }, [window.location.pathname])

  if (fetchingDoneAndDataIsEmpty) {
    return (
      <div>
        <Header navbar={true} />
        <div>
          <h1>No data found</h1>
        </div>
      </div>
    )
  }

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
      return response
    })
    .catch(function (error) {
      // console.log(error)
      return error
    })

  return res
}

async function getBooksBySpecifiedAuthor(author) {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/books/" + author,
  }

  let res = axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data))
      return response
    })
    .catch(function (error) {
      console.log(error)
      return error
    })
  return res
}

export default AllBooksPage

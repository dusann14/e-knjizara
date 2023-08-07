import Header from "../../../components/Header/Header"
import BookList from "../../../components/BookList/BookList"
import Button from "../../../components/Button/Button"
import AddBookModal from "../../../components/Modal/AddBookModal"
import "./Admin.css"
import { Avatar } from "antd"
import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import axios from "axios"
import UpdateBookPriceModal from "../../../components/Modal/UpdateBookPriceModal"

function Admin() {
  const [modalAddOpen, setModalAddOpen] = useState(false)
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false)
  const [books, setBooks] = useState([])
  const [book, setBook] = useState([])

  function closeModalAdd() {
    setModalAddOpen(false)
  }

  function closeModalUpdate() {
    setModalUpdateOpen(false)
  }

  function openUpdateModal(book) {
    setBook(book)
    setModalUpdateOpen(true)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getAllBooks()
      setBooks(response.data)
    }
    fetchData()
  }, [])

  function appendBook(book) {
    let booksClone = books
    booksClone.push(book)
    setBooks(booksClone)
  }

  function removeBook(book) {
    let newBooksList = books.filter((element) => element.id != book.id)
    setBooks(newBooksList)
  }

  function displayBooksList() {
    if (books.length > 0) {
      return <BookList books={books} removeBook={removeBook} openModal={openUpdateModal} />
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40vh",
          }}
        >
          <h1>There are no books previously created</h1>
        </div>
      )
    }
  }

  if (
    sessionStorage.length == 0 ||
    JSON.parse(sessionStorage.getItem("logged_user")).email != "admin@gmail.com"
  ) {
    return <h1>You don't have access to admin page!</h1>
  }

  function handleUpdate(book, price) {
    const list = books
    list.forEach((element) => {
      if (element.id == book.id) {
        element.price = price
      }
    })
    setBooks(list)
  }

  return (
    <div>
      <Header navbar={true} />
      <div className="welcomeAdminDiv">
        <div>
          <h1>Welcome to admin page</h1>
        </div>
        <button className="createBookBtn" onClick={() => setModalAddOpen(true)}>
          Create new books
        </button>
      </div>

      <Modal
        isOpen={modalAddOpen}
        onRequestClose={() => setModalAddOpen(false)}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "#000",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "75%",
            height: "75%",
            backgroundColor: "#fff",
            padding: "2rem",
          },
        }}
      >
        <AddBookModal
          //user={user}
          appendBook={appendBook}
          closeModal={closeModalAdd}
        />
      </Modal>
      <Modal
        isOpen={modalUpdateOpen}
        onRequestClose={() => setModalUpdateOpen(false)}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            color: "#000",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "75%",
            height: "65%",
            backgroundColor: "#fff",
            padding: "2rem",
          },
        }}
      >
        <UpdateBookPriceModal
          book={book}
          changePrice={handleUpdate}
          closeModal={closeModalUpdate}
        />
      </Modal>
      <br />
      {displayBooksList()}
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

export default Admin

import Header from "../../../components/Header/Header"
import BookList from "../../../components/BookList/BookList"
import Button from "../../../components/Button/Button"
import AddBookModal from "../../../components/Modal/AddBookModal"
import "./Admin.css"
import { Avatar } from "antd"
import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import axios from "axios"

function Admin() {
  const [modalOpen, setModalOpen] = useState(false)
  const [action, setAction] = useState()
  const [books, setBooks] = useState([])

  function closeModal() {
    setModalOpen(false)
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
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div className="image-email">
          <Avatar
            src={`https://xsgames.co/randomusers/assets/avatars/pixel/46.jpg`}
            style={{ width: "15vh", height: "15vh" }}
          />

          <p>email</p>
        </div>
      </div>
      <br />
      <br />
      <div className="buttons">
        <button
          className="myButton"
          onClick={() => {
            setModalOpen(true)
            setAction("Add")
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
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
            closeModal={closeModal}
          />
        </Modal>
      </div>
      <br />
      <BookList books={books} />
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

import Header from "../../../components/Header/Header";
import BookList from "../../../components/BookList/BookList";
import Button from "../../../components/Button/Button";
import AddBookModal from "../../../components/Modal/AddBookModal";
import "./Admin.css";
import { Avatar } from "antd";
import React, { useState } from "react";
import Modal from "react-modal";

function Admin({ books }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState();

  function appendBook(book) {}

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div>
      <Header />
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
        <Avatar
          src={`https://xsgames.co/randomusers/assets/avatars/pixel/46.jpg`}
          style={{ width: "15vh", height: "15vh" }}
        />
        <p>email</p>
      </div>
      <br />
      <br />
      <div className="buttons">
        <button
          className="myButton"
          onClick={() => {
            setModalOpen(true);
            setAction("Add");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add
        </button>
        <button
          className="myButton"
          onClick={(e) => {
            e.preventDefault();
            window.location = "http://localhost:3000/login";
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Logout
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
  );
}

export default Admin;

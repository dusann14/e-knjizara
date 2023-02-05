import Header from "../../../components/Header/Header";
import BookList from "../../../components/BookList/BookList";
import Button from "../../../components/Button/Button";
import "./Admin.css";
import Modal from "../../../components/Modal/Modal";
import React, { useState } from "react";

function Admin({ books }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [justId, setJustId] = useState(false);
  const [action, setAction] = useState();
  return (
    <div>
      <Header />
      <br />
      <div className="buttons">
        <button
          className="myButton"
          onClick={() => {
            setModalOpen(true);
            setJustId(false);
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
          onClick={() => {
            setModalOpen(true);
            setJustId(false);
            setAction("Update");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Update
        </button>
        <button
          className="myButton"
          onClick={() => {
            setModalOpen(true);
            setJustId(true);
            setAction("Delete");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Delete
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
        {modalOpen && (
          <Modal setOpenModal={setModalOpen} action={action} justId={justId} />
        )}
      </div>
      <br />
      <BookList books={books} show={false} />
    </div>
  );
}

export default Admin;

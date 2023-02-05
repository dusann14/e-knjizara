import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, action, justId }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <br />
        <div className="body">
          {justId ? (
            <form action="">
              <input type="text" placeholder="Fill in the id of the book" />
            </form>
          ) : (
            <form action="">
              <input type="text" placeholder="Id" />
              <br />
              <input type="text" placeholder={`${action} the title`} />
              <br />

              <input type="text" placeholder={`${action} the author`} />
              <br />

              <input type="text" placeholder="Published year" />
              <br />

              <input type="text" placeholder="Description" />
              <br />
            </form>
          )}
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>{action}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

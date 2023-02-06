import React, { useState } from "react";
import "./BookList.css";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";
import { Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import ColumnGroup from "antd/es/table/ColumnGroup";

const Book = ({ book, add, remove }) => {
  function buttons() {
    const user = JSON.parse(sessionStorage.getItem("logged_user"));

    if (user.email.split("@")[0] === "admin") {
      return (
        <div className="minusplus">
          <Button className="btn" onClick={() => {}} icon={<DeleteFilled />} />
          <Button className="btn" onClick={() => {}} icon={<EditFilled />} />
        </div>
      );
    } else {
      return (
        <div className="minusplus">
          <button className="btn" onClick={() => {}}>
            <ImPlus />
          </button>
          <button className="btn" onClick={() => {}}>
            <ImMinus />
          </button>
        </div>
      );
    }
  }

  function image() {
    if (book.image == null) {
      return (
        <img
          src={
            "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
          }
        ></img>
      );
    } else {
      return <img src={`http://127.0.0.1:8000${book.image.url}`}></img>;
    }
  }

  return (
    <div id={book.id} className="book-item flex flex-column flex-sb">
      <div className="book-item-img">{image()}</div>
      <div className="book-item-info text-center">
        <div className="book-item-info-item title fw-7 fs-18">
          <span>{book.title}</span>
        </div>

        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{book.author}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Description: </span>
          <span>{book.description}</span>
        </div>
        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Price: </span>
          <span>{book.price}</span>
        </div>
        <br />
        {buttons()}
      </div>
    </div>
  );
};

export default Book;

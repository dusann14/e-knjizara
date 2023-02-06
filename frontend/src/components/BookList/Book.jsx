import React, { useState } from "react"
import "./BookList.css"
import { ImPlus } from "react-icons/im"
import { ImMinus } from "react-icons/im"
import { Button } from "antd"
import { EditFilled, DeleteFilled } from "@ant-design/icons"
import ColumnGroup from "antd/es/table/ColumnGroup"

const Book = ({ book }) => {
  console.log(book)

  function image() {
    if (book.image == null) {
      return <></>
    } else {
      return <img src={`http://127.0.0.1:8000${book.image.url}`}></img>
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
          <span className="text-capitalize fw-7">Year published: </span>
          <span>{book.year}</span>
        </div>
        <br />
        {/*!show ? (
          <></>
        ) : (
          <div className="minusplus">
            <button
              className="btn"
              onClick={() => {
                let item = document.getElementById(book.id);
                item.style.background = "aqua";
                add(book.id);
              }}
            >
              <ImPlus />
            </button>
            <button
              className="btn"
              onClick={() => {
                let item = document.getElementById(book.id);
                item.style.background = "white";
                remove(book.id);
              }}
            >
              <ImMinus />
            </button>
          </div>
            )*/}
        {/*<div className="minusplus">
          <Button
            className="btn"
            onClick={() => {
              let item = document.getElementById(book.id);
              item.style.background = "aqua";
              add(book.id);
            }}
            icon={<DeleteFilled />}
          />
          <Button
            className="btn"
            onClick={() => {
              let item = document.getElementById(book.id);
              item.style.background = "white";
              remove(book.id);
            }}
            icon={<EditFilled />}
          />
          </div>*/}
      </div>
    </div>
  )
}

export default Book

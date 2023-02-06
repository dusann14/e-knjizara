import React, { useState, useEffect } from "react"
import Book from "../BookList/Book"
import "./BookList.css"
import axios from "axios"

const BookList = ({ books, removeBook }) => {
  return (
    <section className="booklist">
      <div className="container">
        <div className="booklist-content grid">
          {books.map((book) => {
            return <Book key={book.id} book={book} removeBook={removeBook} />
          })}
        </div>
      </div>
    </section>
  )
}

export default BookList

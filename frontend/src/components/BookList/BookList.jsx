import React from "react";
import Book from "../BookList/Book";
import "./BookList.css";

const BookList = ({ books, add, remove, show }) => {
  if (show === false) {
    return (
      <section className="booklist">
        <div className="container">
          <div className="booklist-content grid">
            {books.map((item, index) => {
              return <Book key={index} book={item} show={show} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booklist">
      <div className="container">
        <div className="booklist-content grid">
          {books.map((item, index) => {
            return (
              <Book
                key={index}
                book={item}
                add={add}
                remove={remove}
                show={show}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;

import React from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookList/BookList";

function AllBooksPage({ books }) {
  return (
    <div>
      <Header navbar={true} />
      <div className="books">
        <BookList books={books} show={false} />
      </div>
    </div>
  );
}

export default AllBooksPage;

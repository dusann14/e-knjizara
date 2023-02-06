import React from "react"
import "./BookList.css"
import Book from "../BookList/Book"
import Header from "../Header/Header"

function Reservations({ reservations }) {
  // console.log(reservations)
  if (reservations == null) return <>You don't have any reservations</>

  return (
    <>
      <section className="booklist">
        <div className="container">
          <div className="booklist-content grid">
            {reservations.map((item, index) => {
              return <Book key={index} book={item.book} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Reservations

import React from "react";
import Book from "../BookList/Book";
import { useState, useEffect } from "react";
import "./AddBookModal.css";
import axios from "axios";
import qs from "qs";

function UpdateBookPriceModal({ book, changePrice, closeModal }) {
  const [price, setPrice] = useState(0);

  async function handleUpdate() {
    var data = qs.stringify({
      price: price,
    });

    var config = {
      method: "put",
      url: `http://127.0.0.1:8000/api/admin/book/${book.id}`,
      headers: {
        Authorization: "Bearer " + `${sessionStorage.getItem("token")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        closeModal();
        changePrice(book, price);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function image() {
    if (book.image !== null) {
      return (
        <img
          style={{ width: "20%", height: "5%" }}
          src={`http://127.0.0.1:8000${book.image.url}`}
        />
      );
    } else
      return (
        <img
          style={{ width: "20%", height: "5%" }}
          src={
            "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
          }
        ></img>
      );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <br />
      {image()}
      <br />
      <p>Title: {book.title}</p>
      <br />
      <p>Author: {book.author}</p>
      <br />
      <input
        type="text"
        placeholder={book.price}
        style={{ border: "3px solid #dddd" }}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <br />
      <button className="button" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default UpdateBookPriceModal;

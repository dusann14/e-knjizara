import "./User.css";
import React, { useState, useEffect } from "react";
import BookList from "../../../components/BookList/BookList";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { Avatar } from "antd";
import axios from "axios";

function User() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getReservations();
      setBooks(response.data);
    }
    fetchData();
  }, []);

  if (books.length == 0) {
    return (
      <div>
        <Header navbar={true} />
        <div class="load"></div>
      </div>
    );
  }

  return (
    <div>
      <Header navbar={true} />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={`${sessionStorage.getItem("profile_image")}`}
          style={{ width: "15vh", height: "15vh" }}
        />
        <br />
        <p>{JSON.parse(sessionStorage.getItem("logged_user")).email}</p>
      </div>
      <br />
      <div className="books">
        <BookList books={books} />
      </div>
    </div>
  );
}

async function getReservations() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/api/books",
  };

  let res = axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data))
      return response.data;
    })
    .catch(function (error) {
      // console.log(error)
      return error;
    });

  return res;
}

export default User;

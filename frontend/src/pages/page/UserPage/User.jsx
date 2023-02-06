import "./User.css";
import React, { useState, useEffect } from "react";
import BookList from "../../../components/BookList/BookList";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Reservations from "../../../components/BookList/Reservations";
import { Avatar } from "antd";
import axios from "axios";

function User() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getReservations();
      console.log(response.reservations);
      setBooks(response.reservations);
    }
    fetchData();
  }, []);
  /*
  if (books.length == 0) {
    return (
      <div>
        <Header navbar={true} />
        <div class="load"></div>
      </div>
    );
  }
*/
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
      <br />
      <div style={{ border: "solid", width: "100%" }}></div>
      <br />
      <p style={{ textAlign: "center" }}>My reservations:</p>
      <br />
      <br />
      <div className="books">
        <Reservations reservations={books} />
      </div>
    </div>
  );
}

async function getReservations() {
  const user = JSON.parse(sessionStorage.getItem("logged_user"));

  var config = {
    method: "get",
    url: `http://127.0.0.1:8000/api/user/${user.id}/reservations`,
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };

  let res = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      // console.log(error)
      return error;
    });

  return res;
}

export default User;

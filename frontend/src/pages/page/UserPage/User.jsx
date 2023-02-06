import "./User.css";
import BookList from "../../../components/BookList/BookList";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import { Avatar } from "antd";

function User() {
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
          gap: "20px",
        }}
      >
        <Avatar
          src={`https://xsgames.co/randomusers/assets/avatars/pixel/46.jpg`}
          style={{ width: "15vh", height: "15vh" }}
        />
        <p>email</p>
      </div>
      <br />
      <br />
      <div className="buttons">
        <button className="myButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Link style={{ color: "#212121" }} to="/reservations">
            My reservations
          </Link>
        </button>
        <button
          className="myButton"
          onClick={(e) => {
            e.preventDefault();
            window.location = "http://localhost:3000/login";
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Logout
        </button>
      </div>
      <br />
      <div className="books">
        <BookList />
      </div>
    </div>
  );
}

export default User;

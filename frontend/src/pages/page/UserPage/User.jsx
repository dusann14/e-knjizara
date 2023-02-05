import "./User.css";
import BookList from "../../../components/BookList/BookList";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";

function User({ books, add, remove }) {
  return (
    <div>
      <Header />
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
        <BookList books={books} add={add} remove={remove} show={true} />
      </div>
    </div>
  );
}

export default User;

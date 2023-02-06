import { React, useState, useRef } from "react";
import "./AddBookModal.css";

function AddBookModal({ user, appendBook, closeModal }) {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(selectedFile);
  };

  function handlePublish() {}

  return (
    <div>
      <div className="textAreaContainer">
        <p>Title:</p>
        <textarea name="" id="" style={{ width: "30%" }} rows="1.5"></textarea>
        <p>Author:</p>
        <textarea name="" id="" style={{ width: "30%" }} rows="1.5"></textarea>
        <p>Price:</p>
        <textarea name="" id="" style={{ width: "30%" }} rows="1.5"></textarea>
        <br />
        <br />
        <p>Description:</p>
        <textarea
          placeholder="Add some description"
          name=""
          id=""
          style={{ width: "100%" }}
          rows="5"
          onChange={handleTextChange}
          className="textArea"
        ></textarea>
        <br />
        <br />
        <div
          className="twoButtons"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <button onClick={handleButtonClick} className="button">
            Add picture
          </button>
          <button onClick={handlePublish} className="button">
            Publish
          </button>
        </div>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default AddBookModal;

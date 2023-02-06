import axios from "axios"
import { React, useState, useRef } from "react"
import "./AddBookModal.css"

function AddBookModal({ appendBook, closeModal }) {
  const fileInputRef = useRef(null)

  const [selectedFile, setSelectedFile] = useState(null)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(parseFloat(e.target.value))
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    console.log(selectedFile)
  }

  function handlePublish() {
    var data = new FormData()
    data.append("title", title)
    data.append("author", author)
    data.append("description", description)
    data.append("price", price)
    if (selectedFile != null) {
      data.append("image", selectedFile)
    }

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/admin/book",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(response.data)
        appendBook(response.data.book)
        closeModal()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="textAreaContainer">
        <p>Title:</p>
        <textarea
          name=""
          id=""
          style={{ width: "30%" }}
          rows="1.5"
          onChange={handleTitle}
        ></textarea>
        <p>Author:</p>
        <textarea
          name=""
          id=""
          style={{ width: "30%" }}
          rows="1.5"
          onChange={handleAuthor}
        ></textarea>
        <p>Price:</p>
        <textarea
          name=""
          id=""
          style={{ width: "30%" }}
          rows="1.5"
          onChange={handlePrice}
        ></textarea>
        <br />
        <br />
        <p>Description:</p>
        <textarea
          placeholder="Add some description"
          name=""
          id=""
          style={{ width: "100%" }}
          rows="5"
          onChange={handleDescription}
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
  )
}

export default AddBookModal

import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import User from "./pages/page/UserPage/User"
import Home from "./pages/page/Home"
import Reservations from "./components/BookList/Reservations"
import RegistrationPage from "./pages/page/RegistrationPage/RegistrationPage"
import Login from "./pages/page/LoginPage/Login"
import AllBooksPage from "./pages/page/AllBooksPage"
import AdminPage from "./pages/page/AdminPage/Admin"

function App() {
  const [reservations, setReservations] = useState([])
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Rich dad poor dad",
      author: "Robert Kiosaki",
      year: "1966",
      description:
        "Rich Dad Poor Dad was written by Robert Kiyosaki and advocates financial independence primarily through financial literacy and understanding money the way a rich person does. The author argues that the reason why so many poor and middle class people don't become rich is because they simply don't understand money and have values or beliefs that prevent them from getting there, such as all rich people are greedy.",
      checked: false,
    },
    {
      id: 2,
      title: "Atomic habits",
      author: "James Clear",
      year: "2000",
      description:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones is a 2018 nonfiction book by entrepreneur James Clear. The book details strategies in adopting new habits and getting rid of non-desired ones. Atomic Habits is a New York Times best-seller which has sold over 4 million copies.",
      checked: false,
    },
    {
      id: 3,
      title: "Psychology of money",
      author: "Morgan Housel",
      year: "1950",
      description:
        "Most of us assume financial success depends on education and intelligence. But in The Psychology of Money, finance expert Morgan Housel presents an alternate hypothesis: The key to financial success lies in understanding human behavior. Housel posits that when you understand how emotions and beliefs influence your financial decisions, you’ll make better financial decisions.",
      checked: false,
    },
    {
      id: 5,
      title: "How to make friends and influence people",
      author: "Dale Carnegie",
      year: "1976",
      description:
        "Most of us assume financial success depends on education and intelligence. But in The Psychology of Money, finance expert Morgan Housel presents an alternate hypothesis: The key to financial success lies in understanding human behavior. Housel posits that when you understand how emotions and beliefs influence your financial decisions, you’ll make better financial decisions.",
      checked: false,
    },
    {
      id: 6,
      title: "Rich dad poor dad",
      author: "Robert Kiosaki",
      year: "1966",
      description:
        "Rich Dad Poor Dad was written by Robert Kiyosaki and advocates financial independence primarily through financial literacy and understanding money the way a rich person does. The author argues that the reason why so many poor and middle class people don't become rich is because they simply don't understand money and have values or beliefs that prevent them from getting there, such as all rich people are greedy.",
      checked: false,
    },
    {
      id: 7,
      title: "Atomic habits",
      author: "James Clear",
      year: "2000",
      description:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones is a 2018 nonfiction book by entrepreneur James Clear. The book details strategies in adopting new habits and getting rid of non-desired ones. Atomic Habits is a New York Times best-seller which has sold over 4 million copies.",
      checked: false,
    },
    {
      id: 8,
      title: "Psychology of money",
      author: "Morgan Housel",
      year: "1950",
      description:
        "Most of us assume financial success depends on education and intelligence. But in The Psychology of Money, finance expert Morgan Housel presents an alternate hypothesis: The key to financial success lies in understanding human behavior. Housel posits that when you understand how emotions and beliefs influence your financial decisions, you’ll make better financial decisions.",
      checked: false,
    },
    {
      id: 9,
      title: "How to make friends and influence people",
      author: "Dale Carnegie",
      year: "1976",
      description:
        "Most of us assume financial success depends on education and intelligence. But in The Psychology of Money, finance expert Morgan Housel presents an alternate hypothesis: The key to financial success lies in understanding human behavior. Housel posits that when you understand how emotions and beliefs influence your financial decisions, you’ll make better financial decisions.",
      checked: false,
    },
    {
      id: 10,
      title: "Rich dad poor dad",
      author: "Robert Kiosaki",
      year: "1966",
      description:
        "Rich Dad Poor Dad was written by Robert Kiyosaki and advocates financial independence primarily through financial literacy and understanding money the way a rich person does. The author argues that the reason why so many poor and middle class people don't become rich is because they simply don't understand money and have values or beliefs that prevent them from getting there, such as all rich people are greedy.",
      checked: false,
    },
    {
      id: 11,
      title: "Atomic habits",
      author: "James Clear",
      year: "2000",
      description:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones is a 2018 nonfiction book by entrepreneur James Clear. The book details strategies in adopting new habits and getting rid of non-desired ones. Atomic Habits is a New York Times best-seller which has sold over 4 million copies.",
      checked: false,
    },
    {
      id: 12,
      title: "Psychology of money",
      author: "Morgan Housel",
      year: "1950",
      description:
        "Most of us assume financial success depends on education and intelligence. But in The Psychology of Money, finance expert Morgan Housel presents an alternate hypothesis: The key to financial success lies in understanding human behavior. Housel posits that when you understand how emotions and beliefs influence your financial decisions, you’ll make better financial decisions.",
      checked: false,
    },
    {
      id: 13,
      title: "How to make friends and influence people",
      author: "Dale Carnegie",
      year: "1976",
      description:
        "Most of us assume financial success depends on education and intelligence. But in The Psychology of Money, finance expert Morgan Housel presents an alternate hypothesis: The key to financial success lies in understanding human behavior. Housel posits that when you understand how emotions and beliefs influence your financial decisions, you’ll make better financial decisions.",
      checked: false,
    },
  ])

  const addToReservations = (id) => {
    console.log(id)
    books.forEach((book) => {
      if (book.id === id) {
        book.checked = true
        refresh()
      }
    })
  }

  const removeFromReservation = (id) => {
    books.forEach((book) => {
      if (book.id === id) {
        book.checked = false
        refresh()
      }
    })
  }

  const refresh = () => {
    let newReservations = []
    books.forEach((book) => {
      if (book.checked === true) {
        newReservations.push(book)
      }
    })
    setReservations(newReservations)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={<User books={books} add={addToReservations} remove={removeFromReservation} />}
        />
        <Route path="/reservations" element={<Reservations reservations={reservations} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<AllBooksPage books={books} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

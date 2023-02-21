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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books/:author?" element={<AllBooksPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

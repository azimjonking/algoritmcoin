import React from 'react'
import { Link } from "react-router-dom";
import "./ForgotPassword.css"
import { IoIosClose } from "react-icons/io";

const ForgotPassword = () => {
  return (
    <div
      className="forgot-password"
      style={{ backgroundImage: "url(./assets/coinbg.png)" }}
    >
      <form>
        <Link to="/" className="close-btn" type="button">
          <IoIosClose className="icon" />
        </Link>
        <h3>Parolni almashtirish</h3>
        <input type="password" placeholder="Yangi parol" />
        <input type="password" placeholder="Parolni qaytaring" />
        <button type="button" className="create">
          Tayyor
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword
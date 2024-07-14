import React from "react";
import { Link } from "react-router-dom";
import "./AddTeacher.css";
import { IoIosClose } from "react-icons/io";

const AddTeacher = () => {
  return (
    <div
      className="addteacher"
      style={{ backgroundImage: "url(./assets/coinbg.png)" }}
    >
      <form>
        <Link to="/teachers" className="close-btn" type="button">
          <IoIosClose className="icon" />
        </Link>
        <h3>O'qituvchi qo'shish</h3>
        <input type="text" placeholder="Ism" />
        <input type="text" placeholder="Familiya" />
        <input type="text" placeholder="Telefon raqam" />
        <input type="text" placeholder="Fan" />
        <button type="button" className="create">
          Tayyor
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;

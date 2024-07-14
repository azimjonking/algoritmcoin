import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./StudentsList.css";

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.error("There was an error fetching the students!", err);
      });
  }, []);

  console.log(students);

  return (
    <div className="container studentsList" id="studentsList">
      <table className="students-table">
        <thead>
          <tr>
            <td>Ism / Familiya</td>
            <td>Telefon Raqam</td>
            <td className='subjects'>
              <select name="" id="">
                <option value="english">English</option>
                <option value="IT">IT</option>
                <option value="fizika">Fizika</option>
                <option value="matematika">Matematika</option>
              </select>
            </td>
            <td>Coin qo'shish</td>
            <td>Coins</td>
            <td className='days'>
              <select name="" id="">
                <option value="all">All Days</option>
                <option value="toq">toq kunlar</option>
                <option value="juft">juft kunlar</option>
              </select>
            </td>
            <td>Action</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Utkir Giyosov</td>
            <td>+998 90 694 8717</td>
            <td>Ingliz tili</td>
            <td>
              <select name="" id="">
                <option value="null"></option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
              </select>
            </td>
            <td>7 000</td>
            <td>14-16</td>
            <td>
              <Link>O'zgartirish</Link>
            </td>
            <td>
              <button>O'chirish</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./StudentsList.css";
import { TiTick } from "react-icons/ti";

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
            <td>№</td>
            <td>Ism / Familiya</td>
            <td>Telefon Raqam</td>
            <td className="subjects">
              <select name="subject" id="subject">
                <option value="all">All</option>
                <option value="english">English</option>
                <option value="IT">IT</option>
                <option value="fizika">Fizika</option>
                <option value="matematika">Matematika</option>
              </select>
            </td>
            <td>Coin qo'shish</td>
            <td>Coins</td>
            <td className="days">
              <select name="day" id="day">
                <option value="all">All Days</option>
                <option value="toq">toq kunlar</option>
                <option value="juft">juft kunlar</option>
              </select>
            </td>
            <td className="action">Action</td>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.map((student, i) => {
              return (
                <tr>
                  <td>{i+1}</td>
                  <td>{student.firstName} {student.lastName}</td>
                  <td>{student.phone}</td>
                  <td>{student.subjects[0].subject}</td>
                  <td className="add-coin">
                    {/* <select name="coin" id="coin">
                <option value="null">Coin tanlang</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
              </select> */}
                    <input type="text" />
                    <button>
                      <TiTick className="icon" />
                    </button>
                  </td>
                  <td>7 000</td>
                  <td>14-16</td>
                  <td className="action">
                    <Link>Edit</Link>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;

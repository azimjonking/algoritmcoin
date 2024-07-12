import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TeachersList.css";

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/teachers")
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.error("There was an error fetching the teachers!", err);
      });
  }, []);

  return (
    <div className="container teacherList" id="teacher">
      <table className="teachers-table">
        <thead>
          <tr>
            <td className='table-header'>
              <table>
                <tr>
                  <td>Ism / Familiya</td>
                  <td>Telefon raqam</td>
                  <td>Fan</td>
                  <td>O'quvchilar soni</td>
                </tr>
              </table>
            </td>
            <td className='role'>Admin</td>
          </tr>
        </thead>

        <tbody>
          {teachers &&
            teachers.map((teacher, i) => {
              return (
                <tr key={i}>
                  <td className='tbody-data'>
                    <table>
                      <tr>
                        <td>{teacher.firstName} {teacher.lastName}</td>
                        <td>{teacher.phone}</td>
                        <td>{teacher.subject}</td>
                        <td>
                          <Link to='/studentsList' className='studentsCount-link'>{teacher.studentsCount} ta</Link>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td className='action'>
                    <table>
                      <tr>
                        <td>
                          <Link>O'zgartirish</Link>
                        </td>
                        <td>
                          <button>O'chirish</button>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersList;

import React, { useState, useEffect } from "react";
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
        <tbody>
          <tr>
            <td>
              <span>Ism / Familya</span>
              <span>Telefon raqam</span>
              <span>Fan</span>
              <span>O'quvchilar soni</span>
            </td>
            <td className='action action-header'>Action</td>
          </tr>

          {teachers &&
            teachers.map((teacher, i) => {
              return (
                <tr key={i}>
                  <td>
                    <span>
                      {teacher.firstName} {teacher.lastName}
                    </span>
                    <span>{teacher.phone}</span>
                    <span>{teacher.subject}</span>
                    <span>{teacher.studentsCount} ta</span>
                  </td>
                  <td className="action">
                    <button className='edit'>edit</button>
                    <button className='delete'>delete</button>
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

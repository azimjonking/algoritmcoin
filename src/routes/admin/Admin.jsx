import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <section className="admin container">
      <div className="admin-info">
        <h1 className="section-title">ADMIN PAGE</h1>
        <p className="section-subtitle">Страница администратора</p>
        <div className="admin-btns">
          <Link className="teachers-btn btn btn-primary" to="/teachers">
            O'qituvchilar ro'yhati
          </Link>
          <Link className="students-btn btn btn-secondary" to="/students">
            O'quvchilar ro'yhati
          </Link>
        </div>
        <div className="admin-statistics">
          <div className="admin-statistics__info">
            <p>Statistika</p>
            <p>
              <span></span> O'quvchilar soni
            </p>
          </div>
          <div className="admin-statistics__img">
            <img src="./assets/statistics.png" alt="statistics" />
          </div>
        </div>
      </div>
      <div className="admin-img">
        <img src="./assets/folder.png" alt="folder" />
      </div>
    </section>
  );
};

export default Admin;

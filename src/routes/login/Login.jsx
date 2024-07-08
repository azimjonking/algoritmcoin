import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section className="login container">
      <div className="login-header">
        <h1 className="section-title">
          ALGORITM <span>COIN</span>GA XUSH KELIBSIZ!
        </h1>
        <p className="section-subtitle">ДОБРО ПОЖАЛОВАТЬ! В АЛГОРИТМ COIN.</p>
      </div>
      <form action="#" className="login-form">
        <div className="login-form__header">
          <h3 className="login-form__title">Veb-saytga kirish</h3>
          <p className="login-form__subtitle">
            Password yoki username xato emasligiga ishonch hosil qiling!
          </p>
        </div>
        <div className="login-form__container">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button type="button" className="btn">
            Kirish
          </button>
          <p>
            Tugmani bosib, <Link to="/">maxfiylik siyosati</Link> va{" "}
            <Link to="/">foydalanuvchi shartnomasining</Link> shartlarini qabul
            qilgan bo'lasiz
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;

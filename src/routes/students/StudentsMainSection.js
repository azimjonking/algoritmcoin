import React from "react";
import "./StudentsMainSection.css";
import { FaArrowDown } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const StudentsMainSection = () => {
  return (
    <section className="students-main">
      {/* info start */}
      <div className="students-main__info">
        <h1 className="section-title">
          O'quvchilar <br />
          Ro'yhati
        </h1>
        <p className="section-subtitle">Список учителей</p>
        <a href="#studentsList" className="students-main__btn btn btn-primary">
          <span>Pastga suring</span>
          <FaArrowDown className="scroll-icon" />
        </a>
      </div>
      {/* info end */}

      {/* img start */}
      <div
        className="students-main__img"
        style={{ backgroundImage: "URL('./assets/circle.svg')" }}
      >
        <div className="students-main__imgFrame">
          <LazyLoadImage
            src="./assets/students.png"
            alt="students"
            className="students-img"
            effect="blur"
          />
          <img
            src="./assets/coin1.png"
            alt="coin"
            className="coin-img coin-1"
          />
          <img
            src="./assets/coin2.png"
            alt="coin"
            className="coin-img coin-2"
          />
          <img
            src="./assets/coin3.png"
            alt="coin"
            className="coin-img coin-3"
          />
          <img
            src="./assets/coin4.png"
            alt="coin"
            className="coin-img coin-4"
          />
          <img
            src="./assets/coin5.png"
            alt="coin"
            className="coin-img coin-5"
          />
          <img
            src="./assets/coin6.png"
            alt="coin"
            className="coin-img coin-6"
          />
          <img
            src="./assets/coin7.png"
            alt="coin"
            className="coin-img coin-7"
          />
          <img
            src="./assets/coin8.png"
            alt="coin"
            className="coin-img coin-8"
          />
          <img
            src="./assets/coin9.png"
            alt="coin"
            className="coin-img coin-9"
          />
          <img
            src="./assets/coin10.png"
            alt="coin"
            className="coin-img coin-10"
          />
        </div>
      </div>
      {/* img end */}
    </section>
  );
};

export default StudentsMainSection;

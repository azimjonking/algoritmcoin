import React from "react";
import "./TeachersMainSection.css";
import { FaArrowDown } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const TeachersMainSection = () => {
  return (
    <section className="teacher-main">
      {/* info start */}
      <div className="teacher-main__info">
        <h1 className="section-title">
          O'qituvchilar <br />
          Ro'yhati
        </h1>
        <p className="section-subtitle">Список учителей</p>
        <a href="#teacher" className="teacher-main__btn btn btn-primary">
          <span>Pastga suring</span>
          <FaArrowDown className="scroll-icon" />
        </a>
      </div>
      {/* info end */}

      {/* img start */}
      <div className="teacher-main__img">
        <LazyLoadImage src="./assets/teachers.png" alt="teachers" effect='blur' />
      </div>
      {/* img end */}

      <div className="teacher-shadowImg">
        <img src="./assets/teacherShadow.png" alt="shadow" />
      </div>
    </section>
  );
};

export default TeachersMainSection;

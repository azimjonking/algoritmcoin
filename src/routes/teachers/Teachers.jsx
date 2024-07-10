import React from "react";
import "./Teachers.css";
import TeachersMainSection from "./TeachersMainSection";
import TeachersList from "../../components/teachersList/TeachersList";

const Teachers = () => {
  return (
    <>
      <TeachersMainSection />
      <TeachersList />
    </>
  );
};

export default Teachers;

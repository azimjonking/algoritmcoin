import React from "react";
import "./Students.css";
import StudentsMainSection from './StudentsMainSection';
import StudentsList from '../../components/studentsList/StudentsList';

const Students = () => {
  return (
    <>
      <StudentsMainSection />
      <StudentsList />
    </>
  );
};

export default Students;

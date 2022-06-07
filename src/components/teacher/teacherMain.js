import React from 'react';
import GetAllTeacher from './teacherGETall';
import TeacherDeleteByID from './teacherDeleteById';
import TeacherGetByID from './teacherGETbyID';

function TeacherMain() {
  return (
    <>
      <GetAllTeacher />
      <TeacherDeleteByID /> <br /> <br />
      <TeacherGetByID /> <br /> <br />
    </>
    )
}

export default TeacherMain;
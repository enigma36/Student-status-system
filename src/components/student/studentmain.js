import React from 'react';
import GetAllStudent from './studentGETall';
import PostStudentForm from './postStudentForm';
import StudentDeleteById from './studentDeleteById';
import StudentGetByID from './studentGETbyID';
import UpdateStudent from './studentUPDATE';

function Studentmain() {
  return (
    <>
        <GetAllStudent />
        <PostStudentForm />
        <StudentDeleteById /> <br />
        <StudentGetByID />
        <UpdateStudent />
    </>
  )
}

export default Studentmain;
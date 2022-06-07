import React from 'react'
import GetAllSubject from './subjetGETall';
import SubjectGetByID from './subjectGETbyID';
import SubjectDeleteById from './subjectDeleteById';

function SubjectMain() {
  return (
    <>
        <GetAllSubject /> <br /> <br />
        <SubjectGetByID /> <br /> <br />
        <SubjectDeleteById /> 
    </>
  )
}

export default SubjectMain;
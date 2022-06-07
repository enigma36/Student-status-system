import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login page/login";
import Home from "./components/home page/home";
import AdminMain from "./components/admin/adminMain";
import Studentmain from "./components/student/studentmain";
import SubjectMain from "./components/subject/subjectMAIN";
import PostMain from "./components/post/postMain";
import TeacherMain from "./components/teacher/teacherMain";
import SignUp from "./components/signup page/sign";

export default function Routing() {
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='login' element= {<Login />} />
        <Route path='admin' element = {<AdminMain />} />
        <Route path='student' element = {<Studentmain />} />
        <Route path='subject' element = {<SubjectMain />} />
        <Route path='post' element = {<PostMain />} />
        <Route path='teacher' element = {<TeacherMain />} />
        <Route path="signup" element = {<SignUp />} />
        
    </Routes>
    </BrowserRouter>
    )

}


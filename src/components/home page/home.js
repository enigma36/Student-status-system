import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleAdmin = () => {
    navigate('/admin');
  };

  const handleStudent = () => {
    navigate('/student');
  };

  const handleSubject = () => {
    navigate('/subject');
  };

  const handlePost = () => {
    navigate('/post');
  };

  const handleTeacher = () => {
    navigate('/teacher');
  };

  return (
    <div className="home_container">
      <button id="login" onClick={handleLogin}>
        Login
      </button>
      <button id="signup" onClick={handleSignUp}>
        Signup
      </button>
      <button id="admin" onClick={handleAdmin}>
        admin
      </button>
      <button id="admin" onClick={handleStudent}>
        student
      </button>
      <button id="admin" onClick={handleSubject}>
        subject
      </button>
      <button id="admin" onClick={handlePost}>
        post
      </button>
      <button id="admin" onClick={handleTeacher}>
        teacher
      </button>
      

    </div>
  );
}

export default Home;

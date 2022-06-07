import axios from "axios";
import React, { useState } from "react";

function AddNewPost() {
  const url = "https://student-status-system.herokuapp.com/api/v1/post/save";

  const [data, setData] = useState({
    date: "",
    content: "",
    faculty: "",
    semester: "",
    title: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        addedDate: data.date,
        content: data.content,
        faculty: data.faculty,
        semester: data.semester,
        title: data.title,
      })
      .then((res) => {
        console.log('posted');
      })
      .catch((err)=> {
          console.log('error: ' + err);
      })
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <div>
        <p> Create Post:  </p>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="date"
          value={data.date}
          type="date"
          placeholder="date"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="content"
          value={data.content}
          type="text"
          placeholder="content"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="faculty"
          value={data.faculty}
          type="text"
          placeholder="faculty"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="semester"
          value={data.semester}
          type="text"
          placeholder="semester"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="title"
          value={data.title}
          type="text"
          placeholder="title"
        />{" "}
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default AddNewPost;

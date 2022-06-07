import axios from "axios";
import React, { useState } from "react";

function UpdatePost() {
  const url = "https://student-status-system.herokuapp.com/api/v1/post/update";

  const [data, setData] = useState({
    newDate: "",
    newContent: "",
    newFaculty: "",
    newId: "",
    newSemester: "",
    newTitle: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .put(url, {
        addedDate: data.newDate,
        content: data.newContent,
        faculty: data.newFaculty,
        id: data.newId,
        semester: data.newSemester,
        title: data.newTitle,
      })
      .then((res) => {
        console.log('updated');
      })
      .catch((err)=> {
          console.log('error: ' + err);
      })
  }

  function handle(e) {
    const updateData = { ...data };
    updateData[e.target.id] = e.target.value;
    setData(updateData);
    console.log(updateData);
  }

  return (
    <div>
        <p> update post </p>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="newdate"
          value={data.newDate}
          type="date"
          placeholder="date"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newContent"
          value={data.newContent}
          type="text"
          placeholder="content"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newFaculty"
          value={data.newFaculty}
          type="text"
          placeholder="faculty"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newId"
          value={data.newId}
          type="text"
          placeholder="id"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newSemester"
          value={data.newSemester}
          type="text"
          placeholder="semester"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newTitle"
          value={data.newTitle}
          type="text"
          placeholder="title"
        />{" "}
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default UpdatePost;

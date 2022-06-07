import axios from "axios";
import React, { useState } from "react";

function StudentGetByID() {
  const [Id, setId] = useState("");

  const api = axios.create({
    baseURL: "https://student-status-system.herokuapp.com/api/v1/student",
  });

  const handle = () => {
    api
      .get(`/${Id}`)
      .then((res) => {
        console.log(res.data.data);
        console.log("gotem");
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  };

  return (
    <>
      <input
        onChange={(e) => setId(e.target.value)}
        value={Id}
        id="ID"
        type="text"
        placeholder="id"
      />
      <button onClick={handle}>get by id</button>
    </>
  );
}

export default StudentGetByID;

import axios from "axios";
import React, { useState } from "react";

function PostStudentForm() {
  const url = "https://student-status-system.herokuapp.com/api/v1/student/save";

  const [data, setData] = useState({
    address: "",
    contact: "",
    email: "",
    fullname: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        address: data.address,
        contact: data.contact,
        email: data.email,
        name: data.fullname,
        password: data.password,
      })
      .then((res) => {
        console.log('submitted');
      })
      .catch((err)=> {
          console.log('this is the error: ' + err);
      })
  };

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="address"
          value={data.address}
          type="text"
          placeholder="address"
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="contact"
          value={data.contact}
          type="text"
          placeholder="contact"
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
          type="text"
          placeholder="email"
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="fullname"
          value={data.fullname}
          type="text"
          placeholder="fullname"
        />
        <br />
        <input
          onChange={(e) => handle(e)}
          id="password"
          value={data.password}
          type="password"
          placeholder="password"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostStudentForm;

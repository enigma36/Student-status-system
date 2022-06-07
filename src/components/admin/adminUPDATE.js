import axios from "axios";
import React, { useState } from "react";

function UpdateAdmin() {
  const url = "https://student-status-system.herokuapp.com/api/v1/admin/update";

  const [data, setData] = useState({
    newAddress: "",
    newContact: "",
    newEmail: "",
    newId: "",
    newFullname: "",
    newPassword: "",
  });

  function submit(e) {
    e.preventDefault();
    axios
      .put(url, {
        address: data.newAddress,
        contact: data.newContact,
        email: data.newEmail,
        id: data.newId,
        name: data.newFullname,
        password: data.newPassword,
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
        <p> update admin </p>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="newAddress"
          value={data.newAddress}
          type="text"
          placeholder="address"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newContact"
          value={data.newContact}
          type="text"
          placeholder="contact"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newEmail"
          value={data.newEmail}
          type="text"
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newId"
          value={data.id}
          type="text"
          placeholder="id"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newFullname"
          value={data.newFullname}
          type="text"
          placeholder="fullname"
        />{" "}
        <br />
        <input
          onChange={(e) => handle(e)}
          id="newPassword"
          value={data.newPassword}
          type="password"
          placeholder="password"
        />{" "}
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default UpdateAdmin;

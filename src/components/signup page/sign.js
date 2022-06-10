import axios from "axios";
import React, { useState } from "react";
import './signup.css';

function SignUp() {
  const url = "https://student-status-system.herokuapp.com/api/v1/student/save";

  const [fname, setFname] = useState(false);
  const [fpassword, setFpassword] = useState(false);
  const [fconfirm, setFconfirm] =useState(false);
  const [faddress, setFaddress] = useState(false);
  const [fcontact,setFcontact] = useState(false);
  const [femail, setFemail] = useState(false);


  const [data, setData] = useState({
    address: "",
    contact: "",
    email: "",
    fullname: "",
    password: "",
  });

  function submit(e) {
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
        console.log("posted");
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const handleFocusName = (e) => {
      setFname(true);
  }


  const handleFocusPassword = (e) => {
      setFpassword(true);
  }


  const handleFocusConfirm = (e) => {
    setFconfirm(true);
}


const handleFocusEmail  = (e) => {
  setFemail(true);
}


const handleFocusAddress = (e) => {
  setFaddress(true);
}


const handleFocusContact = (e) => {
  setFcontact(true);
}





  return (
    <div>
      <p> student form: </p>
      <form onSubmit={(e) => submit(e)}>
      <input
          onChange={(e) => handle(e)}
          id="fullname"
          value={data.fullname}
          type="text"
          required
          placeholder="fullname"
          pattern='^[A-Za-z\s]{3,16}$'
          onBlur={e =>handleFocusName(e)}
          focused={fname.toString()}
        />{" "}
        <div >
        <span>It must have 3-16 characters and shouldn't include any special characters and numbers</span>
        </div>

        <input
          onChange={(e) => handle(e)}
          id="password"
          value={data.password}
          type="password"
          onBlur={e=>handleFocusPassword(e)}
          focused={fpassword.toString()}
          required
          pattern='^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$'
          placeholder="password"
        />{" "}
        <div>
        <span>It should be 8-20 characters and include at least 1 letter,1 number and 1 special character</span>
        </div>

        <input
          onChange={(e) => handle(e)}
          id="confirmPassword"
          type="password"
          onBlur={handleFocusConfirm}
          focused={fconfirm.toString()}
          required
          pattern={data.password}
          placeholder="confirmPassword"
        />{" "}
        <div>
        <span>Password do not match</span>
        </div>
        <input
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
          type="email"
          onBlur={handleFocusEmail}
          focused={femail.toString()}
          required
          placeholder="email"
        />{" "}
        <div>
        <span>It must be a valid email</span>
        </div>
        <input
          onChange={(e) => handle(e)}
          id="address"
          value={data.address}
          type="text"
          onBlur={handleFocusAddress}
          focused={faddress.toString()}
          required
          placeholder="address"
        />{" "}
        <div>
        <span></span>
        </div>
        <input
          onChange={(e) => handle(e)}
          id="contact"
          value={data.contact}
          type="text"
          onBlur={handleFocusContact}
          focused={fcontact.toString()}
          required
          placeholder="contact"
        />{" "}
        <div>
        <span></span>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}

export default SignUp;

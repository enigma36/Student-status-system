import React, { useState } from 'react'
import InputForm from '../input Form/inputForm';

function SignUp() {

const [values, setValues] = useState({
  address:'',
  contact:'',
  email:'',
  fullname:'',
  password:'',
  confirmPassword:''
});

  return (
    <div>
      <form>
        <InputForm placeholder="address" />
        <InputForm placeholder="contact" />
        <InputForm placeholder="email" />
        <InputForm placeholder="fullname" />
        <InputForm placeholder="password" />
        <InputForm placeholder="confirmPassword" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp;


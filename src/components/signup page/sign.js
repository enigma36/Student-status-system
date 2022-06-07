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

const inputs = [
{
  id:1,
  name:'username',
  type:'text',
  placeholder:'username',
  label:'username'
}

]

const handleSubmit = (e) => {
  e.preventDefault();

  /* 

  another method to display data without lots of rendereing
  const data = new FormData(e.target);
  console.log(Object.fromEntries(data.entries())); 
  
  */
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputForm name='address'  placeholder='address'/>
        <button>Submit</button>
      </form>
    </div>
    )
}

export default SignUp;


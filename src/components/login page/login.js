import React from "react";
import './login.css'

export default function Login() 
{
    return (
        <div className="container">

            

            <form>
                <div>
                    <label>
                        <input type='text' name="username" placeholder = 'username' required/>
                    </label>
                </div>
                <div>
                    <label>
                        <input type='password' name='password' placeholder = 'password' required/>
                    </label>
                </div>
                <div>
                    <button className="submit_btn" >Login</button>
                </div>
            </form>
        </div>
    )
}




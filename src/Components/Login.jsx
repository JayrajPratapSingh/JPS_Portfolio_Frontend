import React, {useState} from 'react'
import "../Style/Login.css"
import {Button, Typography} from "@mui/material"
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault()
    }
    return (
        <div className='login'>
          <div className="loginContainer">
            <form action="" className="loginForm" onSubmit={submitHandler}>
                <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{marginRight: "1vmax"}} >N</p>


                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>

                <div>
                <input type='email' required placeholder='Admin Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type='password' required placeholder='Admin Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Button >Login</Button>
                </div>

                
            </form>
          </div>
        </div>
    )
}

export default Login

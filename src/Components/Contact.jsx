import React, { useState } from 'react'
import "../Style/Contact.css"
import { Button, Typography } from '@mui/material'
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");

    const contactFormHandler = (e)=>{
        e.preventDefault();

    }


    return (
        <div className='contact'>
            <div className='required '>

            </div>
            <div className="contactContainer">
                <form action="" className="contactContainerForm" onSubmit={contactFormHandler}>
                    <Typography variant="h4" >Contact Me</Typography>
                    <input type="text" required placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" required placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <textarea required placeholder='Message' cols="30" rows="10" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <Button variant='contained' type="submit">Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact

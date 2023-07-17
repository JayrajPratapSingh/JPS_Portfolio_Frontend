import React, { useEffect, useState } from 'react'
import "../Style/Contact.css"
import { Button, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { ContactUs } from '../actions/user';
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const dispatch= useDispatch()
    const alert = useAlert()

    const {loading, message:alertMessage, error}  = useSelector((state)=>state.update)

    const contactFormHandler = (e)=>{
        e.preventDefault();
        dispatch(ContactUs(name, email, message))
       
    }

    useEffect(()=>{
        if(error){
            alert.error();
            dispatch({type:"CLEAR_ERROR"})
        }
        if(alertMessage){
            alert.success(alertMessage)
            dispatch({type:"CLEAR_MESSAGE"})
        }
    },[alert, error, alertMessage, dispatch])


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
                    <Button variant='contained' type="submit" disabled={loading}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact

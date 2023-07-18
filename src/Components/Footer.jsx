import { Typography } from '@mui/material'
import React from 'react'
import "../Style/Footer.css"
import { Link } from 'react-router-dom'
import {BsGithub, BsFacebook, BsLinkedin, BsInstagram} from "react-icons/bs"

const Footer = () => {
    return (
        <div className="footer">
            <div>
            <Typography variant='h5'>About Me</Typography>
            <Typography>
                Hey, my name is Jayraj Pratap Singh. I am a MERN Full-Stack Developer.
            </Typography>

            <Link to="/contact" className='footerContactBtn'>
                <Typography >Contact Me</Typography>
                
            </Link>
            <Typography style={{color:"white", fontFamily:"Roboto",fontSize:"1rem"}} variant=''>Email : jairaj273310@gmail.com</Typography>
        </div>

        <div>
            <Typography variant='h6'>
                Social Media
            </Typography>

            <a className='anchor' href="https://github.com/JayrajPratapSingh" target='blank'>
                <BsGithub />
            </a>

            <a className='anchor' href="https://www.instagram.com/ythjjps/" target='blank'>
                <BsInstagram />
            </a>

            <a className='anchor' href="https://www.facebook.com/johnrobin45" target='blank'>
                <BsFacebook />
            </a>

            <a className='anchor' href="https://www.linkedin.com/in/jairaj-pratap-singh-457712193/" target='blank'>
                <BsLinkedin />
            </a>
            
        </div>
        </div>
    )
}

export default Footer

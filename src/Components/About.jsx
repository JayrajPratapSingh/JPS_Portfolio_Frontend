import React from 'react'
import "../Style/About.css"
import {Typography} from "@mui/material"
import avatar from "../assets/avatar.PNG"
const About = () => {
    return (
        <div className='about'>
            <div className="aboutContainer">
                <Typography>
                    This is a sample Quote
                </Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={avatar} alt="jayraj" className='aboutAvatar'/>
                <Typography variant='h4' style={{margin:"1vmx"}}>Jayraj Pratap Singh</Typography>
                    <Typography >Full Stack MERN Developer</Typography>
                </div>
                <div>
                    
                    <Typography
                    className='aboutDescription'
                    >
                        This is description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ab exercitationem consequatur rerum voluptatum delectus
                    </Typography>

                </div>
            </div>
        </div>
    )
}

export default About

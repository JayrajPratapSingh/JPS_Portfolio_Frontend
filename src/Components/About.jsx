import React from 'react'
import "../Style/About.css"
import {Typography} from "@mui/material"
const About = ({about}) => {
    return (
        <div className='about'>
            <div className="aboutContainer">
                <Typography>
                    {about.quote}
                </Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={about.avatar.url} alt="jayraj" className='aboutAvatar'/>
                <Typography variant='h4' style={{margin:"1vmx"}}>{about.name}</Typography>
                    <Typography >{about.title}</Typography>
                    <Typography variant='' style={{margin:"1vmax 0", textAlign:"center", fontFamily:"sans-serif", fontSize:"1.2rem"}}>{about.subtitle}</Typography>
                </div>
                <div>
                    
                    <Typography
                    className='aboutDescription'
                    >
                        {about.description}
                    </Typography>

                </div>
            </div>
        </div>
    )
}

export default About

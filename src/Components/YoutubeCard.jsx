import { Typography } from '@mui/material'
import React from 'react'
import "../Style/YoutubeCard.css"
const YoutubeCard = ({
    url="https://youtube.com/6packprogrammer",
    title= "Title Here",
    image
}) => {
    
    return (
        <div className='youtubeCard'>
            <a href={url} target="blank">
                <img src={image} alt="Video" />
                <Typography >{title}</Typography>
            </a>
        </div>
    )
}

export default YoutubeCard

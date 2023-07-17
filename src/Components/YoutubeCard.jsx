import { Button, Typography } from '@mui/material'
import {FaTrash} from "react-icons/fa"
import React from 'react'
import "../Style/YoutubeCard.css"
import { useDispatch } from 'react-redux'
import { deleteYoutube, getUser } from '../actions/user'
const YoutubeCard = ({
    url,
    title,
    image,
    isAdmin=false,
    id
}) => {
    const dispatch = useDispatch();


    const deleteHandler = async(id)=>{
        await dispatch(deleteYoutube(id));
        dispatch(getUser())
    }
    
    return (
        <div className='youtubeCard'>
            <a href={url} target="blank">
                <img src={image} alt="Video" />
                <Typography >{title}</Typography>
            </a>
            { isAdmin && ( <Button style={{margin:"auto", display:"block", color:"red"}} onClick={()=>deleteHandler(id)}><FaTrash /> </Button>)}
        </div>
    )
}

export default YoutubeCard

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { useSelector } from 'react-redux';
import {  addYoutube, getUser } from '../actions/user';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import YoutubeCard from "./YoutubeCard"

const AdminYoutube = () => {
    const {message, error, loading} = useSelector(state=> state.update);
    const {message:loginMessage} = useSelector((state) =>state.login)
    const {user} = useSelector(state=> state.user)


    const dispatch = useDispatch();
    const  alert = useAlert()
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");
    const submitHandler = async(e)=>{
        e.preventDefault();
        await dispatch(addYoutube(title,url,image))
        dispatch(getUser())
    }

    

    const handleImage = (e)=>{
        const Reader = new FileReader();
        Reader.readAsDataURL(e.target.files[0]);

        Reader.onload=()=>{
            if(Reader.readyState===2){
                setImage(Reader.result)
            }
        }
    }

    useEffect(()=>{
        if(error){
            alert.error(message)
            dispatch({type:"CLEAR_ERRORS"})
        }
        if(message){
            alert.success(message)
            dispatch({type:"CLEAR_MESSAGE"})
        }

        if(loginMessage){
            alert.success(loginMessage)
            dispatch({type:"CLEAR_MESSAGE"})
        }
    },[alert, error,message, dispatch, loginMessage])
    return (
        <div className='adminPanel'>
            <div className='adminPanelContainer'>
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

                <form onSubmit={submitHandler}>
                    <input type="text" className='adminPanelInput' placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />

                    <input type="text" className='adminPanelInput' placeholder='Link' value={url} onChange={(e)=>setUrl(e.target.value)} />

                    <input type='file' className="adminPanelUpload"  onChange={handleImage} accept='image/*'/>
                    

                    <Link to="/account">
                        BACK <MdKeyboardBackspace />
                    </Link>
                   

                    <Button type="submit" variant="contained" disabled= {loading} >ADD</Button>
                </form>
                <div className='adminPanelYoutubeVideos'>
                    {user && user.youtube && user.youtube.map((item)=>(
                        <YoutubeCard  key={item._id} link={item.url} title={item.title} image={item.image.url} isAdimn={true} id={item._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminYoutube;

import { Delete } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React from 'react'
import "../Style/projects.css"
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../actions/user';

export const ProjectCard = ({id, url, ProjectImage, ProjectTitle, description, technologies, isAdmin=false}) => {
  const  dispatch = useDispatch();
 const deleteHandler = async(id)=>{
await dispatch(
    deleteProject(id))
dispatch(getUser());
}
    return (
        <>
         <a href={url} className='projectCard' target='blank'>
            <div>
                <img src={ProjectImage} alt="project" />
                <Typography variant="h5" >
                    {ProjectTitle}
                </Typography>
            </div>
            <div>
               <Typography variant='h4' >
                About Project
               </Typography>
               <Typography>{description}</Typography>
               <Typography variant='h6'>Tech Stack:{technologies}</Typography>

            </div>
         </a>   
         {
            isAdmin && (
                <Button onClick={()=>deleteHandler(id)} style ={{color:"red"}}>
                    <Delete />
                </Button>
            )
         }
        </>
    )
}

export default ProjectCard;

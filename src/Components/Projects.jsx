import { Typography } from '@mui/material'
import React from 'react'
import {AiOutlineProject} from "react-icons/ai"
import ProjectCard from './ProjectCard';
import "../Style/projects.css"
import {FaRegSmileWink} from "react-icons/fa"

const Projects = ({projects}) => {
    
    return (
        <div className='projects'>
            <Typography variant='h3' >
                Projects <AiOutlineProject />
            </Typography>
        <div className="projectWrapper">
                {
                projects.map((projects)=>(
                    <ProjectCard key={projects._id} url={projects.url} ProjectImage={projects.image.url} ProjectTitle={projects.title} description={projects.description} technologies={projects.techStack} id={projects._id} />
                ))}
            </div>
           
            <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
                All The Projects Shown Above Are Made By Me <FaRegSmileWink/>
            </Typography>
        </div>
    )
}

export default Projects

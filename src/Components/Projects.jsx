import { Typography } from '@mui/material'
import React from 'react'
import {AiOutlineProject} from "react-icons/ai"
import ProjectCard from './ProjectCard'
const Projects = () => {
    const projects =[];

    return (
        <div className='projects'>
            <Typography variant='h3' >
                Projects <AiOutlineProject />
            </Typography>
            <div className="projectWrapper">
                {projects.map((projects,index)=>(
                    <ProjectCard />
                ))}
            </div>
        </div>
    )
}

export default Projects

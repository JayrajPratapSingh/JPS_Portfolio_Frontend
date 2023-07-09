import { Typography } from '@mui/material'
import React from 'react'
import {AiOutlineProject} from "react-icons/ai"
import ProjectCard from './ProjectCard';
import "../Style/projects.css"
import {FaRegSmileWink} from "react-icons/fa"

const Projects = () => {
    const projects = [1,2,3]
    return (
        <div className='projects'>
            <Typography variant='h3' >
                Projects <AiOutlineProject />
            </Typography>
        <div className="projectWrapper">
                {
                projects.map((projects,index)=>(
                    <ProjectCard url="https://github.com/JayrajPratapSingh" ProjectImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0LziPvIZX_zyAdbDPtnrTKW-OyJRBFGhtlLg7k8&s" ProjectTitle="sample project" description="This is a sample project dsafljalskdfj lkjdfldk ldf sd flsd " technologies="Mongodb, React, NodeJs, Express" />
                ))}
            </div>

            <Typography variant='h3' style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
                All The Projects Shown Above Are Made By Me <FaRegSmileWink />
            </Typography>
        </div>
    )
}

export default Projects

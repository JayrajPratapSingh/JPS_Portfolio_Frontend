import React, { useEffect } from 'react';
import "../Style/Home.css";
import * as THREE from 'three';
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import earthImg from "../assets/earth.jpg"
import moonImg from "../assets/moon.jpg"
import sunImg from "../assets/sun.jpg"
import spaceImg from "../assets/space.webp"
import {Typography} from "@mui/material/"
import  TimeLine  from './TimeLine';
import {Link} from "react-router-dom"

//importing react Icons

import {
    SiCplusplus,
    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiThreedotjs
}
 from "react-icons/si"
import YoutubeCard from './YoutubeCard';
import { MouseOutlined } from '@mui/icons-material';


const Home = ({timelines,youtubes,skills}) => {
    useEffect(()=>{
        //Adding image to Create 3d Texture

        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load(earthImg);
        const moonTexture = textureLoader.load(moonImg);
        const sunTexture = textureLoader.load(sunImg)
        const SpaceTexture = textureLoader.load(spaceImg)


        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const canvas = document.querySelector(".homeCanvas")
        const renderer = new THREE.WebGLRenderer({canvas});

        //Creating Objects like earth Sun Moon
        const earthGeometry = new THREE.SphereGeometry(3,64,64);
        const earthMaterial = new THREE.MeshStandardMaterial({map: earthTexture});
        const earth = new THREE.Mesh(earthGeometry,earthMaterial);

        const moonGeometry = new THREE.SphereGeometry(1.5,64,64);
        const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture});
        const moon = new THREE.Mesh(moonGeometry,moonMaterial);

        const sunGeometry = new THREE.SphereGeometry(5,64,64);
        const sunMaterial = new THREE.MeshBasicMaterial({map: sunTexture});
        const sun = new THREE.Mesh(sunGeometry,sunMaterial);


        // Setting Light and Position of Objects 
        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight1 = new THREE.PointLight(0xffffff, 0.02);



        const lightHelper = new THREE.PointLightHelper(pointLight)

        // const controls = new OrbitControls(camera,renderer.domElement)

        scene.add(earth);
        scene.add(pointLight);
        scene.add(lightHelper)

        scene.add(moon);
        scene.add(sun)
        scene.add(pointLight1)
        scene.background=SpaceTexture;
        moon.position.set(8,-5,-5)
        sun.position.set(-8,-5,5)

        pointLight.position.set(-8,-8,5)
        pointLight1.position.set(8,8,-5)
        
        window.addEventListener("mousemove", (e)=>{
            if(e.clientX <= window.innerWidth/2){
               

                moon.rotation.x += 0.01;
                sun.rotation.x += 0.01;
                earth.rotation.x += 0.01;
                moon.rotation.y -= 0.01;
                sun.rotation.y -= 0.01;
                earth.rotation.y -= 0.01;
            }
            if(e.clientX > window.innerWidth/2){
                moon.rotation.x -= 0.01;
                sun.rotation.x -= 0.01;
                earth.rotation.x -= 0.01;
                moon.rotation.y -= 0.01;
                sun.rotation.y -= 0.01;
                earth.rotation.y -= 0.01;
            }
            if(e.clientY <= window.innerHeight/2){
                moon.rotation.x += 0.01;
                sun.rotation.x += 0.01;
                earth.rotation.x += 0.01;
                moon.rotation.y -= 0.01;
                sun.rotation.y -= 0.01;
                earth.rotation.y -= 0.01;
            }

            if(e.clientY <= window.innerHeight/2){
                moon.rotation.x -= 0.01;
                sun.rotation.x -= 0.01;
                earth.rotation.x -= 0.01;
                moon.rotation.y -= 0.01;
                sun.rotation.y -= 0.01;
                earth.rotation.y -= 0.01;
            }


        })

        earth.rotation.y += 1;
        moon.rotation.x +=1;
        sun.rotation.z +=1;

        // to Create Cotinuous rotaion animation by recurtion

        camera.position.set(1,1,10)
        const animateMoon = () =>{
            requestAnimationFrame(animateMoon);
             moon.rotation.x += 0.03
            renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)
        }
        animateMoon()


        const animateEarth = () =>{
            requestAnimationFrame(animateEarth);
             earth.rotation.y += 0.01
            renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)
        }
        animateEarth()


        const animateSun = () =>{
            requestAnimationFrame(animateSun);
             sun.rotation.z += 0.01
            renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera)
        }
        animateSun()

        return window.addEventListener("scroll", (e)=>{
            camera.rotation.z=window.scrollY*0.001

            camera.rotation.y=window.scrollY*0.003
            const skillsBox = document.getElementById("homeSkillsBox");
            if(window.scrollY > 1100){
                skillsBox.style.animationName= "homeSkillsBoxAnimationOn"
            }
            else{
                skillsBox.style.animationName= "homeSkillsBoxAnimationOff"
            }
        })
    },[])
    
    return (
        <div className="home">
            <canvas className='homeCanvas'>
                
            </canvas>

            <div className="homeCanvasContainer">
                <Typography variant="h1">
                    <p>J</p>
                    <p>A</p>
                    <p>Y</p>
                    <p>R</p>
                    <p>A</p>
                    <p>J</p>
                </Typography>
                <div className="homeCanvasBox">
                <Typography variant="h2">DESINER</Typography>
                <Typography variant="h2">DEVELOPER</Typography>
                <Typography variant="h2">MERN</Typography>
                <Typography variant="h2">CONTENT CREACTER</Typography>
                </div>
                <Link to="/projects" >View Projects</Link>
                </div>

                <div className="homeScrollBtn">
                    <MouseOutlined />
                </div>
            <div className="homeContainer">
                    <Typography variant="h3">TIMELINE</Typography>
                    <TimeLine timelines={timelines} />
                    
            </div>

            <div className="homeSkills">
                <Typography variant="h3">Skills</Typography>
                <div className="homeCubeSkills">
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces1'>
                        <img src={skills.image1.url} alt="face1" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces2'>
                        <img src={skills.image2.url} alt="face2" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces3'>
                        <img src={skills.image3.url} alt="face3" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces4'>
                        <img src={skills.image4.url} alt="face4" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces5'>
                        <img src={skills.image5.url} alt="face5" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces6'>
                        <img src={skills.image6.url} alt="face6" />
                    </div>

                </div>

                <div className="cubeShadow"></div>

                <div className="homeSkillsBox" id="homeSkillsBox">
                    <SiCplusplus />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiJavascript />
                    <SiMongodb />
                    <SiExpress />
                    <SiReact />
                    <SiNodedotjs />
                    <SiThreedotjs />
                </div>
            </div>

            <div className="homeYoutube">
                <Typography variant="h3" >
                    YOU TUBE
                </Typography>

                <div className="homeYoutubeWrapper">
                    {
                        youtubes.map((item)=>(
                            <YoutubeCard 
                            key={item._id}
                            image={item.image.url}
                            title={item.title}
                            url={item.url}
                            id={item._id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;

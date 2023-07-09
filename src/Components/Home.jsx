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

const Home = () => {
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
    },[])
    
    return (
        <div className="home">
            <canvas className='homeCanvas'></canvas>
            <div className="homeContainer">
                    <Typography variant="h3">TIMELINE</Typography>
                    <TimeLine timelines={[1,2,3,4]} />
                    
            </div>

            <div className="homeSkills">
                <Typography variant="h3">Skills</Typography>
                <div className="homeCubeSkills">
                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces1'>
                        <img src="https://www.html.it/app/uploads/2016/02/javascript-1.png" alt="face1" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces2'>
                        <img src="https://nimishprabhu.com/wp-content/uploads/2021/07/react-logo.png" alt="face2" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces3'>
                        <img src="https://www.techrepublic.com/wp-content/uploads/2022/07/html-css-beginners.jpg?x27457" alt="face3" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces4'>
                        <img src="https://www.chrisjmendez.com/content/images/size/w1200/2018/12/ExpressJS.jpg" alt="face4" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces5'>
                        <img src="https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif" alt="face5" />
                    </div>

                    <div className='homeCubeSkillsFaces homeCubeSkillsFaces6'>
                        <img src="https://miro.medium.com/v2/resize:fit:760/1*oUH0ByyW-KOtLe1jAL2GqA.png" alt="face6" />
                    </div>

                </div>

                <div className="cubeShadow"></div>

                <div className="homeSkillsBox">
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
                    <YoutubeCard image={"https://ih1.redbubble.net/image.571913602.7102/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg"}
                    title="Sample Video"
                    />

<YoutubeCard image={"https://ih1.redbubble.net/image.571913602.7102/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg"}
                    title="Sample Video"
                    />

<YoutubeCard image={"https://ih1.redbubble.net/image.571913602.7102/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg"}
                    title="Sample Video"
                    />

<YoutubeCard image={"https://ih1.redbubble.net/image.571913602.7102/st,small,845x845-pad,1000x1000,f8f8f8.u4.jpg"}
                    title="Sample Video"
                    />


                </div>
            </div>
        </div>
    )
}

export default Home;

import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../assets/logo-png.png"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
  return (
    <ReactNavbar
    
      navColor1="white"
      navColor2="hsl(119, 48%, 8%)"
      burgerColor="hsl(150, 100%, 20%)"
      burgerColorHover="hsl(150, 100%, 30%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color='HSL(170,100%, 85%)'
      link1Size="1.5rem"
      link1Pdding="3vmax"
      logo={logo}
      logoWidth="10rem"
      logoBorderRadius="50%"
      profileIcon = {true}
      ProfileIconElement= {FaUserAlt}
      profileIconColor="HSL(170,100%, 85%)"
      profileIconColorHover="white"

    />
  );
};

export default Header;

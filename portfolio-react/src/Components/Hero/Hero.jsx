import React from "react";
import profile_img from '../../assets/profile_img.svg'
import '../Hero/Hero.css'
const Hero=()=>{
    return(
        <>
            <div id="home" className="hero">
                <img src={profile_img}/>
                <h1><span>I'am Harikrishna,</span>frontend developer based in india</h1>
                <p>Aspiring frontend developer from india, eager to start my career and grow in modern web technologies</p>
                <div className="hero-action">
                    <div className="hero-connect">Connect With Me</div>
                    <div className="hero-resume">My Resume</div>
                </div>
            </div>
        </>
    )
}
export default Hero;
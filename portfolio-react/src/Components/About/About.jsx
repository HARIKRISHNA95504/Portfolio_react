import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about.jpg'
const About=()=>{
    return(
        <>
            <div id="about" className="about">
               <div className="about-title">
                    <h1>About Me</h1>
                    {/* <img src={theme_pattern} alt="" /> */}
               </div>
               <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt="" />
                    </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate and enthusiastic Frontend Developer ready to start my career in the tech industry. I have gained a solid understanding of web development through personal projects, coursework, and continuous learning.</p>
                        <p>I enjoy creating clean and responsive user interfaces, and I’m always eager to learn new technologies. I approach every task with curiosity, dedication, and a strong desire to grow as a developer.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
               </div>
               <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>90+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
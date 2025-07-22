import React from "react";
import profile_img from '../../assets/hero.jpg'
import github from '../../assets/github.svg'
import mail from '../../assets/mail.svg'

import '../Hero/Hero.css'
const Hero = () => {
    return (
        <><section class="hero-section">
            <div id="home" className="hero">
                
                <h1>
                    <span className="hi">Hi, I'm </span>
                    <span className="">Hari Krishna</span>
                </h1>
                <p className="hero-fs">
                    Fresher Full Stack Developer
                </p>
                <p className="hero-description"> Passionate about creating modern web applications with JavaScript, React, and Node.js.
                    Ready to bring fresh ideas and enthusiasm to your development team.</p>
                <div class="button-group">
                    <button  class="btn  hover-lift">
                        <img src={mail} alt="" className="icon icon-sm" />
                        Get In Touch
                    </button>

                    <a href="https://github.com/HARIKRISHNA95504" target="_blank" rel="noopener noreferrer">
                        <button className="btn hover-lift">
                            <img src={github} alt="GitHub Icon" className="icon icon-sm" />
                            View Work
                        </button>
                    </a>
                </div>
                
                <div class="social-links">

                </div>


            </div>
            </section>
        </>
    )
}
export default Hero;
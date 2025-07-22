import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about.jpg'
import code from '../../assets/code-solid.svg'
import database from '../../assets/database-solid.svg'
import globe from '../../assets/globe-solid.svg'
const About=()=>{
    const highlights = [
    {
      icon:code,
      title: "Frontend Development",
      description: "Building responsive websites with HTML, CSS, JavaScript, and React. Learning modern frameworks and best practices."
    },
    {
        icon:database,
      title: "Backend Development",
      description: "Learning server-side development with Python, Django, Node.js, Express, and database management with SQL and NoSQL databases."
    },
    {
       icon:globe,
      title: "Learning & Growth",
      description: "Constantly expanding my skillset through hands-on projects, online courses, and staying updated with industry trends."
    }
  ];

    return(
        <>
        <section id="about" class="about-section">
  <div class="container">
    <div class="about-header">
      <h2 class="about-title">
        About <span class="text-gradient">Me</span>
      </h2>
      <p class="about-description">
        I'm a passionate fresh graduate with a Computer Science degree, excited to start my journey 
        as a full stack developer. I love learning new technologies and building creative solutions.
      </p>
    </div>

    <div class="about-content">
      <div class="journey">
        <h3 class="journey-title">My Journey</h3>
        <p class="journey-text">
          As a recent Computer Science graduate, I've spent the last one year building a solid 
          foundation in programming fundamentals, data structures, and software engineering principles. 
          Through academic projects and personal learning, I've developed skills across the full development 
          stack, from creating responsive user interfaces to building REST APIs.
        </p>
        <p class="journey-text">
          I'm eager to apply my knowledge in a professional environment and continue learning from 
          experienced developers. When I'm not coding, you'll find me working on personal projects, 
          taking online courses, or contributing to open-source projects to expand my skills.
        </p>
      </div>

      <div class="highlights-grid">
        {highlights.map((highlight,index)=>(
        <div key={index} class="card">
          <div class="card-content">
            <div class="icon-wrapper">
              <img src={highlight.icon} className="h-6 w-6 text-primary  " />
            </div>
            <div>
              <h4 class="card-title">{highlight.title}</h4>
              <p class="card-description">
                {highlight.description}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default About;
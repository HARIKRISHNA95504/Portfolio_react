import React from "react";
import '../Services/Services.css'
import Theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services =()=>{
    const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Django","Node.js", "Express", "REST APIs", "MongoDB", "MySQL", "JSON", "npm", "Authentication"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "SQL", "TypeScript (learning)"]
    },
    {
      title: "Tools & Learning",
      skills: ["VS Code", "Git", "GitHub", "Postman","Vercel", "Figma", "Linux","Power Bi",]
    }
  ];

    return(
    //    <>
    //          <div id="services" className="services">
    //             <div className="services-title">
    //                 <h1>My Services</h1>
    //                 {/* <img src={Theme_pattern}/> */}
    //             </div>
    //             <div className="services-container">
    //                 {Services_Data.map((service,index)=>{
    //                     return <div key={index} className="services-format">
    //                         <h3>{service.s_no}</h3>
    //                         <h2>{service.s_name}</h2>
    //                         <p>{service.s_desc}</p>
    //                         <div className="services-readmode">
    //                             <p>Read More</p>
    //                             <img src={arrow_icon} alt="" />
    //                         </div>
    //                     </div>
    //                 })}
    //             </div>
    //         </div>
    //     </>
    // <section className="py-24 px-6 bg-secondary/30">
    //   <div className="max-w-6xl mx-auto">
    //     <div className="text-center mb-16">
    //       <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
    //         Technical <span className="text-gradient">Skills</span>
    //       </h2>
    //       <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
    //         Technologies and tools I've learned through coursework, personal projects, and self-study.
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {skillCategories.map((category, index) => (
    //         <div key={index} className="hover-lift shadow-card border-border/50">
    //           <div className="pb-4">
    //             <div className="text-xl font-heading text-center">
    //               {category.title}
    //             </div>
    //           </div>
    //           <div>
    //             <div className="flex flex-wrap gap-2">
    //               {category.skills.map((skill, skillIndex) => (
    //                 <div 
    //                   key={skillIndex} 
    //                   variant="secondary" 
    //                   className="hover:bg-primary/20 hover:text-primary transition-smooth text-xs"
    //                 >
    //                   {skill}
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>



<section id="skills" class="skills-section">
  <div class="container">
    <div class="skills-header">
      <h2 class="skills-title">
        Technical <span class="text-gradient">Skills</span>
      </h2>
      <p class="skills-description">
        Technologies and tools I've learned through coursework, personal projects, and self-study.
      </p>
    </div>

    <div class="skills-grid">
      {/* <!-- Repeat this block for each skill category --> */}
      {skillCategories.map((category,index)=>(
        <div class="skills-card">
        <div class="skills-card-header">
          <div class="skills-card-title">{category.title}</div>
        </div>
        <div class="skills-list">
            
          {category.skills.map((skill,skillIndex)=>(
            <div class="skill-tag">{skill}</div>
          ))}
        </div>
      </div>
      ))}
      
    </div>
  </div>
</section>

    )
}
export default Services;
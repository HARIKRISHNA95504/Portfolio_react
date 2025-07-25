import React from "react";
import '../MyWork/MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import arrowLink from '../../assets/arrow-up-right.svg'
import code from '../../assets/laptop-solid.svg'
const MyWork = () => {
    const projects = [
        {
            title: "E-commerce Website",
            description: "A responsive E-commerce website built with React and Jawascript and Node.js. Features dark mode, smooth animations, and contact form integration.",
            technologies: ["React", "JavaScript", "Node.js","MongoDB", "HTML5", "CSS3"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/HARIKRISHNA95504/FS-E-commerce",
            featured: true
        },
        {
            title: "Employee Management App",
            description: "A full-stack workforce application with CRUD operations, user authentication, and local storage. Built as a learning project for understanding React state management.",
            technologies: ["React","Javascript", "Node.js", "MongoDB","HTML5", "CSS3"],
            liveUrl: "https://employee-mang-web-app-6v4n.vercel.app/",
            githubUrl: "https://github.com/HARIKRISHNA95504/Employee_Mang_web_app",
            featured: true
        },
        {
            title: "Weather App",
            description: "A weather application that fetches data from OpenWeather API and displays current weather and 5-day forecast with responsive design.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false
        },
        {
            title: "Calculator App",
            description: "A calculator application built with vanilla JavaScript featuring basic arithmetic operations and a clean user interface.",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false
        },
        {
            title: "Recipe Finder",
            description: "A recipe search application using external API that allows users to search for recipes by ingredients or cuisine type.",
            technologies: ["React", "JavaScript", "CSS3", "Recipe API"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false
        },
        {
            title: "Student Management System",
            description: "A college project for managing student records with CRUD operations. Built using Node.js backend and MySQL database.",
            technologies: ["Node.js", "Express", "MySQL", "HTML5", "CSS3"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/example",
            featured: false
        }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    return (
        <>
            <section id="projects" className=".project-section">

                <div className="container">
                    <div className="project-header">
                        <h2 className="project-title">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="project-description">
                            Here are some projects I've built while learning web development. Each project helped me practice different technologies and concepts.
                        </p>
                    </div>

                    {/* Featured Projects */}
                    <div className="project-grid">
                        {featuredProjects.map((project, index) => (
                            <div className="project-cards">
                                <div key={index} className="project-card">
                                <div className="project-card-header">
                                    <h3 className="project-card-title">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="project-card-content">
                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="tech-stack">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-actions">
                                        <button className="btn-outline">
                                            <span className="icon"><img src={arrowLink} alt="" /></span>
                                            Live Demo
                                        </button>
                                        <a href="https://github.com/HARIKRISHNA95504">
                                            <button className="btn-ghost">
                                            <span className="icon"><img src={code} alt="code_icon" /></span>
                                            Code
                                        </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyWork;
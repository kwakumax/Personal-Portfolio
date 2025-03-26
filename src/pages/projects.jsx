// src/components/Projects.js
import React from 'react';
import '../styles/projects.css'


const Projects = () => {
    const projects = [
        { id: 1, title: 'Rent Easii', BackColor: 'rgb(119 199 136)', color: '#fff',border: "0 1.5rem" , description:
             'An appartment renting service connecting tenants and homeowners effortlessly. This is my personal project where I work as a full-stack developer' },
        { id: 2, title: 'Shemen Photography', BackColor: 'wheat', color: '#000',border: "1.5rem 0" , description: 'A website for a reputable photography company displaying their portfolio to their potential clients.' },
        { id: 3, title: 'Reveknew', BackColor: '#d0021b', color: '#fff', border: "0 1.5rem" ,description: 'A subscription management webapp, where I work as an front-end developer' },
    
    ];
    return (<div>
        <section  className="projects-section">
            <div id="projects"  className="projects-container">
                {projects.map(({id, title, description, BackColor, color,border}) => (
                    <div key={id} className="project-card" style={{backgroundColor: BackColor, color: color, borderRadius: border}}>
                        <h3 className='project-style'>{title}</h3>
                        <p className='project-style'>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>)

}
export default Projects;

// src/components/Projects.js
import React from 'react';
import '../styles/projects.css'


const Projects = () => {
    const projects = [
        {
            id: 1, title: 'Rent Easii', BackColor: 'rgb(119 199 136)', color: '#fff', border: "0 1.5rem", animate: "flip-left", description:
                'An appartment renting service connecting tenants and homeowners effortlessly. This is my personal project where I work as a full-stack developer'
        },
        { id: 2, title: 'Shemen Photography', BackColor: 'wheat', animate: "zoom-in", color: '#000', border: "1.5rem 0", description: 'A website for a reputable photography company displaying their portfolio to their potential clients.' },
        // { id: 3, title: 'Reveknew', BackColor: '#d0021b', color: '#fff', border: "0 1.5rem", animate: "flip-right", description: 'A subscription management webapp, where I work as an front-end developer' },

    ];
    return (<div className='mt-2'>
        <div id="projects" className='flex justify-content-center align-items-center proj-title'>Projects</div>
        <section className="projects-section">
            <div className="projects-container">
                {projects.map(({ id, title, description, BackColor, color, border, animate }) => (
                    <div key={id} className="project-card" style={{ backgroundColor: BackColor, color: color, borderRadius: border }} data-aos={animate}>
                        <h3 className='project-style mb-0'>{title}</h3>
                        <p className='project-style mt-1 text-right'>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>)

}
export default Projects;

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Project.css';

interface Project {
    _id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects');
                setProjects(response.data);
            } catch (err) {
                console.error('Error fetching projects:', err);
            }
        };
        fetchProjects();
    }, []);

    return (
        <motion.div
            className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project._id}
                        className="project-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
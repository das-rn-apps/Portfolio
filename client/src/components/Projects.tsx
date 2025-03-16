import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './Project.css';

interface Project {
    _id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    downloadLink: string;
}

// Dummy data for projects
const dummyProjects: Project[] = [
    {
        _id: '1',
        title: 'Project 1',
        description: 'This is the first project. It showcases some amazing work.',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/project1',
        downloadLink: 'https://example.com/project1',
    },
    {
        _id: '2',
        title: 'Project 2',
        description: 'This is the second project. It demonstrates innovative ideas.',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/project2',
        downloadLink: 'https://example.com/project2',
    },
    {
        _id: '3',
        title: 'Project 3',
        description: 'This is the third project. It highlights creative solutions.',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/project3',
        downloadLink: 'https://example.com/project3',
    },
    {
        _id: '4',
        title: 'Project 4',
        description: 'This is the fourth project. It highlights creative solutions.',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/project4',
        downloadLink: 'https://example.com/project4',
    },
    {
        _id: '5',
        title: 'Project 5',
        description: 'This is the fifth project. It highlights creative solutions.',
        image: 'https://via.placeholder.com/300',
        link: 'https://example.com/project5',
        downloadLink: 'https://example.com/project5',
    },
];

// Function to fetch dummy projects
const getProjects = async (): Promise<Project[]> => {
    // Simulate a delay to mimic an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return dummyProjects;
};

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectsData = await getProjects();
            setProjects(projectsData);
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
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project._id}
                        className="project-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
                    >
                        <img src={require("../assets/deepkart.png")} alt={project.title} className="project-image" />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-buttons">
                                <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className="btn download-btn">
                                    Download App
                                </a>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn view-btn">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
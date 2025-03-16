import { motion } from 'framer-motion';
import './About.css';

const About: React.FC = () => {
    return (
        <motion.div
            className="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>About Me</h2>
            <motion.div
                className="about-content"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <img
                    src={require('../assets/deepkart.png')}
                    alt="Profile"
                    className="profile-image"
                />
                <div className="bio">
                    <p>
                        I'm a passionate developer with expertise in React, Node.js, and MongoDB.
                        I love building scalable web applications and solving real-world problems.
                    </p>
                    <h3>Skills</h3>
                    <div className="skills-grid">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Python</span>
                        <span>Docker</span>
                    </div>
                    <h3>Experience</h3>
                    <ul>
                        <li>Full-Stack Developer at XYZ Corp (2022-Present)</li>
                        <li>Frontend Intern at ABC Tech (2021)</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default About;
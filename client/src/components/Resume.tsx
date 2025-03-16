import { motion } from 'framer-motion';
import './Resume.css';
import resumeFile from '../assets/deepkart.png';


const Resume: React.FC = () => {
    return (
        <motion.div
            className="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="resume-content"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {/* Download Section */}
                <div className="download-section">
                    <a
                        href={resumeFile}
                        download="deepkart.png"
                        className="download-button"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Experience Section */}
                <div className="section">
                    <h3>Experience</h3>
                    <ul>
                        <li>
                            <strong>Full-Stack Developer</strong> at XYZ Corp (2022-Present)
                            <ul>
                                <li>Developed scalable web applications using React, Node.js, and MongoDB.</li>
                                <li>Collaborated with cross-functional teams to deliver projects on time.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Frontend Intern</strong> at ABC Tech (2021)
                            <ul>
                                <li>Built responsive user interfaces using React and TypeScript.</li>
                                <li>Improved website performance by optimizing code and assets.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Education Section */}
                <div className="section">
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <strong>B.Sc. in Computer Science</strong> - University of Tech (2020-2024)
                            <ul>
                                <li>Relevant coursework: Data Structures, Algorithms, Web Development, Databases.</li>
                                <li>Graduated with honors.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div className="section">
                    <h3>Skills</h3>
                    <div className="skills-grid">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                        <span>Python</span>
                        <span>Docker</span>
                        <span>Git</span>
                        <span>REST APIs</span>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="section">
                    <h3>Certifications</h3>
                    <ul>
                        <li>
                            <strong>Full-Stack Web Development</strong> - Udemy (2022)
                        </li>
                        <li>
                            <strong>AWS Certified Developer</strong> - Amazon Web Services (2023)
                        </li>
                    </ul>
                </div>

                {/* Achievements Section */}
                <div className="section">
                    <h3>Achievements</h3>
                    <ul>
                        <li>Won 1st place in a national hackathon for building a real-time chat application.</li>
                        <li>Published a blog post on "Best Practices for React Development" with over 10,000 views.</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Resume;
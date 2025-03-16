import { motion } from 'framer-motion';
import './Home.css';

const Home: React.FC = () => {
    return (
        <motion.div
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="hero-section">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Hi, I'm Deepak Das
                </motion.h1>
                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Full-Stack Developer | Designer | Tech Enthusiast
                </motion.p>
                <motion.div
                    className="cta-buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <a href="#projects" className="cta-button">View My Work</a>
                    <a href="#contact" className="cta-button secondary">Contact Me</a>
                </motion.div>
            </div>
            <motion.div
                className="stats-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <div className="stat">
                    <h2>5+</h2>
                    <p>Years of Experience</p>
                </div>
                <div className="stat">
                    <h2>20+</h2>
                    <p>Projects Completed</p>
                </div>
                <div className="stat">
                    <h2>10+</h2>
                    <p>Happy Clients</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Home;
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/deepkart.png'; // Import your logo image

const Navbar: React.FC = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-brand">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="Logo" className="logo-image" /> {/* Use your logo image */}
                </NavLink>
            </div>
            <motion.ul
                className="nav-links"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
                <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
            </motion.ul>
        </motion.nav>
    );
};

export default Navbar;
// Navbar.tsx
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/deepkart.png";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef<HTMLUListElement>(null);

    const toggleMenu = () => setMobileMenuOpen(prev => !prev);
    const closeMenu = () => setMobileMenuOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node) && isMobileMenuOpen) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobileMenuOpen]);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>

                <div className="hamburger" onClick={toggleMenu} aria-label={isMobileMenuOpen ? "close menu" : "open menu"} aria-expanded={isMobileMenuOpen}>
                    <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
                    <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
                    <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
                </div>

                <ul ref={navRef} className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
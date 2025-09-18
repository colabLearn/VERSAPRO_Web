import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { 
    MenuOutlined, 
    CloseOutlined,
    MailOutlined,
    PhoneOutlined,
    FacebookOutlined,
    TwitterOutlined,
    LinkedinOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import '../components_css/Layout.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/team", label: "Our Team" },
        { href: "/project", label: "Our Projects" },
        { href: "/contact", label: "Contact Us" },
        { href: "/partners", label: "Our Partners" }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <a href="/" className="logo-link">
                    <img className="logo" src="/images/VersaPro_logo_colour.png" alt="VERSAPRO Logo" />
                    {/* <span className="logo-text">VERSAPRO</span> */}
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-menu">
                    {menuItems.map((item, index) => (
                        <a key={index} href={item.href} className="nav-link">
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    className="mobile-menu-button"
                    type="text"
                    icon={isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />

                {/* Mobile Navigation */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About VERSAPRO</h3>
                    <p>VERSAPRO is a leading technology company dedicated to delivering innovative solutions and exceptional service to our clients worldwide. Our commitment to excellence drives everything we do.</p>
                    <div className="social-links">
                        <a href="https://facebook.com" aria-label="Facebook"><FacebookOutlined /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><TwitterOutlined /></a>
                        <a href="https://linkedin.com/company/versa-pro" aria-label="LinkedIn"><LinkedinOutlined /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><InstagramOutlined /></a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <a href="/about">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/team">Our Team</a>
                        <a href="/careers">Careers</a>
                        <a href="/blog">Blog</a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <div className="footer-links">
                        <a href="mailto:info@versapro.tech">
                            <MailOutlined /> info@versapro.tech
                        </a>
                        <a href="tel:+447770093639">
                            <PhoneOutlined /> +1 (234) 567-890
                        </a>
                        <address>
                            123 Business Street<br />
                            Tech City, TC 12345
                        </address>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates and insights.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} VERSAPRO. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <a href="/privacy">Privacy Policy</a>
                    <span>|</span>
                    <a href="/terms">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

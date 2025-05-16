// src/components/Footer.jsx
import React from "react";
import { FaTwitter, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/hero.css'

const Footer = () => {
    return (
        <div>
            <div className="grid m-0">
                <p className="text-sm col-12 text-center">
                    &copy; {new Date().getFullYear()} <span className="footer-style">Amankwah Amoako. All Rights Reserved.</span>
                </p>

                <div className="flex gap-4 justify-content-center col-12">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
                        <FaTwitter />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
                        <FaDribbble />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
                        <FaGithub />
                    </a>
                    <a href="www.linkedin.com/in/amankwah-amoako-796011156" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;

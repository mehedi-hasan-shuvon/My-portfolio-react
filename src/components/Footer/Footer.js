import React from 'react';
import SocialContact from '../Common/SocialContact/SocialContact';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-basic">
                <footer>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#about">About</a></li>
                        <li className="list-inline-item"><a href="#project">Projects</a></li>
                        <li className="list-inline-item"><a href="#skill">Skills</a></li>
                        <li className="list-inline-item"><a href="#work">Work</a></li>
                        <li className="list-inline-item"><a href="#contact">Contact</a></li>
                    </ul>
                    <SocialContact></SocialContact>
                    <p className="copyright">All rights reversed. Mehedi Hasan Shuvon's portfolio © 2022</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
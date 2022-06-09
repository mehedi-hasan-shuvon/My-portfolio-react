import React from 'react';
import SocialContact from '../Common/SocialContact/SocialContact';
import './AnimatedFooter.css';
const AnimatedFooter = () => {
    return (
        <div className='animated-footer'>
            <div className='waves'>
                <div className='wave' id='wave1'></div>
                <div className='wave' id='wave2'></div>
                <div className='wave' id='wave3'></div>
                <div className='wave' id='wave4'></div>
            </div>
             <ul className="list-inline">
                        <li className="list-inline-item"><a href="#about">About</a></li>
                        <li className="list-inline-item"><a href="#project">Projects</a></li>
                        <li className="list-inline-item"><a href="#skill">Skills</a></li>
                        <li className="list-inline-item"><a href="#work">Work</a></li>
                        <li className="list-inline-item"><a href="#contact">Contact</a></li>
                    </ul>
                    <SocialContact></SocialContact>
                    <p className="copyright">All rights reversed. Mehedi Hasan Shuvon's portfolio © 2022</p>
        </div>
    );
};

export default AnimatedFooter;
import { faAddressCard, faBriefcase, faCode, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Web.css';
const Web = () => {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href="#project">
                    <FontAwesomeIcon icon={faCode} className='option-icon' />
                    Projects
                </a>
            </div>
            <div className='web-option'>
                <a href="#skills">
                    <FontAwesomeIcon icon={faListCheck} className='option-icon' />
                    Skills
                </a>
            </div>
            <div className='web-option'>
                <a href="#work">
                    <FontAwesomeIcon icon={faBriefcase} className='option-icon' />
                    Work
                </a>
            </div>
            <div className='web-option'>
                <a href="#contact">
                    <FontAwesomeIcon icon={faAddressCard} className='option-icon' />
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Web;
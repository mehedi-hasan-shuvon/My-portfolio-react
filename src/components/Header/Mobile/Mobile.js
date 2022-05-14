import { faAddressCard, faBriefcase, faCircleXmark, faCode, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Mobile.css';
const Mobile = ({ isOpen, setIsOpen }) => {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faCircleXmark} className='option-icon' />
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href="#project">
                        <FontAwesomeIcon icon={faCode} className='option-icon' />
                        Projects
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#skill">
                        <FontAwesomeIcon icon={faListCheck} className='option-icon' />
                        Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#work">
                        <FontAwesomeIcon icon={faBriefcase} className='option-icon' />
                        Work
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href="#contact">
                        <FontAwesomeIcon icon={faAddressCard} className='option-icon' />
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Mobile;
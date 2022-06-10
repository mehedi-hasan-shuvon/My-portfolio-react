import { faAddressCard, faBlog, faBriefcase, faCode, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
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
                <a href="#skill">
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
            <div className='web-option'>
            <Link as={Link} to="/Blogs">
            <FontAwesomeIcon icon={faBlog} className='option-icon' />
                    Blogs
            </Link>
            </div>
        </div>
    );
};

export default Web;
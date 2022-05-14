import React from 'react';
import Separator from '../../Common/separater/Separator';
import SocialContact from '../../Common/SocialContact/SocialContact';
import cv from '../../../assets/cv.pdf'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className='contact'>
            <Separator></Separator>
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in Touch, Contact me on any of the platform</p>
                    <SocialContact></SocialContact>
                </div>
                <div className='download'>
                    <a download href={cv}>
                        <FontAwesomeIcon icon={faDownload} className='download-icon' />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
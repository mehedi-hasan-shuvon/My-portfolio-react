import React from 'react';
import './About.css';
import me from '../../../assets/my-bg2.png'
import SocialContact from '../../Common/SocialContact/SocialContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import cv from '../../../assets/cv.pdf'
const About = () => {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There 👏,
                    <br />
                    I am  <span className='info-name'>Mehedi Hasan Shuvon</span>
                    <br />
                    Growth-oriented, professional minded, enthusiastic and recently graduated B.Sc. on Computer Science and Engineering successfully.I am a Programmer and MERN web Developer with Machine Learning and Animation Skills as well.

                    <div className='download download-resume'>
                    <a download href={cv}>
                        <FontAwesomeIcon icon={faDownload} className='download-icon' target="_blank" />
                         Resume
                    </a>
                </div>
                </div>
                <div className='about-photo'>
                    <img src={me} alt="" className='picture' />
                </div>
            </div>
            <div className='about-bottom'>
                <SocialContact></SocialContact>
            </div>
        </div>
    );
};

export default About;
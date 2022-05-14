import React from 'react';
import './About.css';
import me from '../../../assets/my-bg2.png'
import SocialContact from '../../Common/SocialContact/SocialContact';
const About = () => {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There 👏,
                    <br />
                    I am  <span className='info-name'>Mehedi Hasan Shuvon</span>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reprehenderit molestias perspiciatis quis dolores consectetur molestiae ad dolor nulla voluptatibus?
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
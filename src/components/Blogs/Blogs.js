import React from 'react';
import AnimatedFooter from '../AnimatedFooter/AnimatedFooter';
import Header from '../Header/Header';
import './Blogs.css';
import coming from '../../assets/coming.png'
const Blogs = () => {
    return (
        <div className='blogs'>
            <Header></Header>
            <img className='coming-soon-img' src={coming} alt="" />
            <p className='blog-text'>Blogs are coming soon....</p>
            <AnimatedFooter className='blogs-footer'></AnimatedFooter>
        </div>
    );
};

export default Blogs;
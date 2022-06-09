import React from 'react';
import AnimatedFooter from '../AnimatedFooter/AnimatedFooter';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Body></Body>
            {/* <Footer></Footer> */}
            <AnimatedFooter></AnimatedFooter>
        </div>
    );
};

export default Home;
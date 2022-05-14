import React from 'react';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Home;
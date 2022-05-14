import React from 'react';
import About from './About/About';
import './Body.css';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Work from './Work/Work';
const Body = () => {
    return (
        <div className='body'>
            <section id='about'>
                <About></About>
            </section>
            <section id='project'>
                <Projects></Projects>
            </section>
            <section id='skill'>
                <Skills></Skills>
            </section>
            <section id='work'>
                <Work></Work>
            </section>
            <section id='contact'>
                <Contact></Contact>
            </section>

        </div>
    );
};

export default Body;
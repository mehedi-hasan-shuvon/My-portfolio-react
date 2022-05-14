import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Header.css';
import Mobile from './Mobile/Mobile';
import Web from './Web/Web';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='header'>
            <div className='logo'>
                Mehedi Hasan Shuvon
            </div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web></Web>
                </div>
                <div className='mobile-menu'>

                    <div onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={faBars} className='menu-icon' />
                    </div>
                    {
                        isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}></Mobile>
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;
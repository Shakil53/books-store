import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <Link className='link' to={'/'}>Home</Link>
            <Link className='link' to={'/about'}>About</Link>
            <Link className='link' to={'/order'}>Order</Link>

        </nav>
    );
};

export default Header;
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <div className="toggle">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="index">
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/review'>Review</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
            </div>
        </nav>
    );
};

export default Header;
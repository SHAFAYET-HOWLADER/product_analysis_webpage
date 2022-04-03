import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
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
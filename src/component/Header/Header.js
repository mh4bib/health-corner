import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Health Corner</h1>
            <Link to={"/"}>HOME</Link>
            <Link to={"/services"}>SERVICES</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/blogs"}>BLOGS</Link>
            <Link to={"/login"}>LOGIN</Link>
        </div>
    );
};

export default Header;
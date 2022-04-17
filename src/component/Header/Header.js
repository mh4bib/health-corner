import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user]=useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='header'>
            <h1>Health Corner</h1>
            <Link to={"/"}>HOME</Link>
            <Link to={"/checkouts"}>CHECK OUTS</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/blogs"}>BLOGS</Link>
            {
                user?
                <button className='sign-out' onClick={handleSignOut}>LOG OUT</button>
                :
                <Link to={"/login"}>LOGIN</Link>}
        </div>
    );
};

export default Header;
import React from 'react';
import logo from '../avatars/octocat.png';

const Header = () => (
    <header>
        <div>
            <h1>Github User Dashboard</h1>
            <img src={logo} alt="Github"/>
        </div>
    </header>
);

export default Header;
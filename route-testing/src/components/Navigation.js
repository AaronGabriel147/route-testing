import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    const NavStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h1>Navigation.js</h1>
            <ul className="nav-links">

                <Link style={NavStyle} to="/">
                    <li>Home</li>
                </Link>

                <Link style={NavStyle} to="about">
                    <li>About</li>
                </Link>

                <Link style={NavStyle} to="cosmos">
                    <li>Cosmos</li>
                </Link>

            </ul>
        </nav>
    );
}
 
export default Navigation;
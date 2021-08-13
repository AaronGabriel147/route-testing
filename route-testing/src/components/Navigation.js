import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    const NavStyle = { // Just changes the text color.
        color: 'white'
    };

    return (
        <nav>

            {/* <h1>Navigation.js</h1> */}
            <ul className="nav-links">

                <Link style={NavStyle} to="/">
                    <li>Home</li>
                </Link>

                <Link style={NavStyle} to="about">
                    <li>Rick & Morty</li>
                </Link>

                <Link style={NavStyle} to="cosmos">
                    <li>Nasa Photo of the Day</li>
                </Link>

            </ul>
        </nav>
    );
}
 
export default Navigation;
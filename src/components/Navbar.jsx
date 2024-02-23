import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/"><h1>home.</h1></Link>
                </li>
                <li>
                    <Link to="/Projects"><h1>projects.</h1></Link>
                </li>
                <li>
                    <Link to="/Contact"><h1>contact.</h1></Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;
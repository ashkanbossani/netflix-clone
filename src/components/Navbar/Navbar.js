import React, { useEffect } from 'react';
import "./Navbar.scss";

function Navbar() {

    useEffect(() => {
        
    } , []);

    return (
        <div className="navbar">
            <img className="navbar__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            <img className="navbar__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
            
        </div>
    );
}

export default Navbar;
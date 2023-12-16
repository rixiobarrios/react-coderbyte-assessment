import React from 'react';

function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="title">
                Navbar
            </a>
            <ul>
                <li>
                    <a href="/button-toggle">Button Toggle</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

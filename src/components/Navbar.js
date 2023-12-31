import React from 'react';

function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="title">
                React Coderbyte Assessment
            </a>
            <ul>
                <li>
                    <a href="/button-toggle">Button Toggle</a>
                </li>
                <li>
                    <a href="/simple-counter">Simple Counter</a>
                </li>
                <li>
                    <a href="/list">List</a>
                </li>
                <li>
                    <a href="/phone-book">Phone Book</a>
                </li>
                <li>
                    <a href="/tic-tac-toe">Tic Tac Toe</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

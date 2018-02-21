import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li className="brand"><a href="/">Clicky Game</a></li>
                        <li>Click on an image to start!</li>
                        <li>Score: 0 | Top Score: 0</li>
                    </ul>
                </nav>
            </div>
        );
    };
};

export default Header;
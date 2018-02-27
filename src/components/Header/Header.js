import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0
        };
    };

    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li className="brand"><a href="/">Clicky Game</a></li>
                        <li>Click on an image to start!</li>
                        <li>Score: {this.state.score} | Top Score: {this.state.topScore}</li>
                    </ul>
                </nav>
            </div>
        );
    };
};

export default Header;
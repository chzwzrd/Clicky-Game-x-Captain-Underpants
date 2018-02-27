import React from 'react';
import './Header.css';
import Question from '../Question';

const Header = props =>
    <div>
        <nav className="navbar">
            <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <Question />
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    </div>;

export default Header;
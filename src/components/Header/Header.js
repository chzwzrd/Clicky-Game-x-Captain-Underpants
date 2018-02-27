import React from 'react';
import './Header.css';
import Question from '../Question';

const Header = props =>
    <div>
        <nav className="navbar">
            <ul>
                <li className="brand"><a href="/">Clicky Game</a></li>
                <li><Question question={props.question} answer={props.answer} /></li>
                <li>Score: {props.score} / 32 </li>
            </ul>
        </nav>
    </div>;

export default Header;
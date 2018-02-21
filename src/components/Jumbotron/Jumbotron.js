import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div class="overlay"></div>
                <div class="background-img"></div>
                <div class="caption">
                    <h1>Clicky Game!</h1>
                    <p>Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        );
    };
};

export default Jumbotron;
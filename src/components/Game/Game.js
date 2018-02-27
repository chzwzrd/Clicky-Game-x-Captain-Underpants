import React, { Component } from 'react';
import Header from '../Header';
import Jumbotron from '../Jumbotron';
import FriendWrapper from '../FriendWrapper';
import Footer from '../Footer';

class Game extends Component {
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
                <Header score={this.state.score} topScore={this.state.topScore} />
                <Jumbotron />
                <FriendWrapper />
                <Footer />
            </div>
        );
    };
};

export default Game;
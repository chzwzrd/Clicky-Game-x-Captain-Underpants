import React, { Component } from 'react';
import Header from '../Header';
import Jumbotron from '../Jumbotron';
import FriendWrapper from '../FriendWrapper';
import Footer from '../Footer';
import questions from '../../questions.json';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            topScore: 0,
            question: '',
            answer: ''
        };
    };

    componentDidMount = () => {
        const questionObj = questions[Math.floor(Math.random() * questions.length)];
        const question = questionObj.question;
        const answer = questionObj.answer;
        this.setState({ question: question, answer: answer });
    }

    render() {
        return (
            <div>
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                    question={this.state.question}
                    answer={this.state.answer}
                />
                <Jumbotron />
                <FriendWrapper />
                <Footer />
            </div>
        );
    };
};

export default Game;
import React, { Component } from 'react';
import questions from '../../questions.json';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
    }

    componentDidMount = () => {
        const questionObj = questions[Math.floor(Math.random() * questions.length)];
        const question = questionObj.question;
        const answer = questionObj.answer;
        this.setState({question: question, answer: answer});
    }

    render() {
        return (
            <li>{this.state.question}</li>
        );
    };
};

export default Question;
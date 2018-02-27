import React, { Component } from 'react';
import Header from '../Header';
import Jumbotron from '../Jumbotron';
import FriendWrapper from '../FriendWrapper';
import Footer from '../Footer';
import Modal from 'react-modal';
import friends from '../../friends.json';
import questions from '../../questions.json';

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30rem',
        height: '30rem',
        textAlign: 'center',
        borderRadius: '10px'
    }
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            question: '',
            answer: '',
            friends: friends,
            modalIsOpen: false,
            modalMessage: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    componentDidMount = () => {
        console.log(questions.length);
        this.generateQuestion();
        this.openModal();
    };

    openModal = (message) => {
        this.setState({ modalIsOpen: true, modalMessage: message });
    };

    // afterOpenModal = () => {
    //     // references are now synced and can be accessed
    //     this.subtitle.style.color = '#f00';
    // }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    handleGameEnd = () => {
        const yayMessage = "Wowza, looks like someone's a true fan. Good work!";
        const poopMessage = "What?? Captain Underpants is insulted...";
        const okayMessage = "Oof, looks like someone needs to revisit their childhood..."
        if (this.state.score === 32) {
            this.openModal(yayMessage);
        } else if (this.state.score === 0) {
            this.openModal(poopMessage);
        } else {
            this.openModal(okayMessage);
        }
    };

    generateQuestion = () => {
        if (questions.length > 0) {
            const questionObj = questions[Math.floor(Math.random() * questions.length)];
            const question = questionObj.question;
            const answer = questionObj.answer;
            this.removeQuestion(questionObj);
            return this.setState({ question: question, answer: answer });
        } else {
            this.handleGameEnd();
        }
    };

    removeQuestion = (askedQuestion) => {
        const questionIndex = questions.indexOf(askedQuestion);
        questions.splice(questionIndex, 1);
        console.log(questions.length);
    };

    handleGuess = guess => {
        if (guess === this.state.answer) {
            const newScore = this.state.score + 1;
            this.setState({ score: newScore });

            console.log('Awesome!');
            this.generateQuestion();
        } else {
            console.log('Poop...');
            this.generateQuestion();
        }
    };

    handleClick = e => {
        const userGuess = e.target.getAttribute('name');
        console.log(`guess: ${userGuess}\nanswer: ${this.state.answer}`);
        this.handleGuess(userGuess);
    };

    render() {
        return (
            <div>
                <Header
                    score={this.state.score}
                    question={this.state.question}
                    answer={this.state.answer}
                />
                <Jumbotron />
                <FriendWrapper
                    friends={this.state.friends}
                    handleClick={this.handleClick}
                />
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={modalStyles}
                    contentLabel='Example Modal'
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <div>{this.state.modalMessage}</div>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
                <Footer />
            </div>
        );
    };
};

export default Game;
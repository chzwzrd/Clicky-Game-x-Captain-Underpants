import React, { Component } from 'react';
import Header from '../Header';
import Jumbotron from '../Jumbotron';
import FriendWrapper from '../FriendWrapper';
import Footer from '../Footer';
import Modal from 'react-modal';
import friends from '../../friends.json';
import questions from '../../questions.json';

const styles = {
    modalStyles: {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.589)',
            position: 'fixed',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '30rem',
            height: '20rem',
            textAlign: 'center',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold'
        }
    },
    messageStyles: {
        margin: '25px 10px 20px'
    },
    buttonStyles: {
        margin: '5px 5px auto'
    }
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            questionNum: 1,
            question: '',
            answer: '',
            friends: friends,
            modalIsOpen: false,
            isCorrect: ''
        };
        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
        this.handleGameStart = this.handleGameStart.bind(this);
        this.handleGameEnd = this.handleGameEnd.bind(this);
    };

    componentDidMount = () => {
        console.log(questions.length);
        this.generateQuestion();
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

    handleGameStart = () => {
        window.location.reload();
    };

    handleGameEnd = () => {
        const yayMessage = "Wowza, you're a true fan. The Captain salutes you!";
        const okayMessage = "Oof, someone's out of touch with their inner child...";
        const poopMessage = `${this.state.score}/32?? the Captain is insulted...`;
        if (this.state.score >=25) {
            this.openModal(yayMessage);
        } else if (this.state.score >= 16 && this.state.score < 25) {
            this.openModal(okayMessage);
        } else {
            this.openModal(poopMessage);
        }
    };

    generateQuestion = () => {
        if (questions.length > 0) {
            const questionObj = questions[Math.floor(Math.random() * questions.length)];
            const question = questionObj.question;
            const answer = questionObj.answer;
            this.removeQuestion(questionObj);
            return this.setState({ question: question, answer: answer, questionNum: 32 - questions.length });
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
            this.setState({ score: newScore, isCorrect: true });

            // console.log('Awesome!');
            this.generateQuestion();
        } else {
            this.setState({ isCorrect: false });
            // console.log('Poop...');
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
                    isCorrect={this.state.isCorrect}
                    questionNum={this.state.questionNum}
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
                    style={styles.modalStyles}
                    contentLabel='Example Modal'
                    shouldCloseOnOverlayClick={true}
                >
                    {/* <h2 ref={subtitle => this.subtitle = subtitle}></h2> */}
                    <div style={styles.messageStyles}>{this.state.modalMessage}</div>
                    <button 
                        className='btn btn-default'
                        style={styles.buttonStyles}
                        onClick={this.closeModal}
                    >Close</button>
                    <button
                        className='btn btn-info'
                        style={styles.buttonStyles}
                        onClick={this.handleGameStart}
                    >Play Again</button>
                </Modal>
                <Footer />
            </div>
        );
    };
};

export default Game;
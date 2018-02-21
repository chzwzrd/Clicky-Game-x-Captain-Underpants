import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import FriendWrapper from './components/FriendWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <FriendWrapper />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default App;

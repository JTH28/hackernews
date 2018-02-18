import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    const text = "Welcome to the Road to learn React";
    const user = { first : 'Jason', last : 'H'}
    return (
      <div className="App">
          <h2>{text}, {user.first} {user.last}  </h2>
      </div>
    );
  }
}

export default App;

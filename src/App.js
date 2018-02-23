import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Stuff {
    constructor(title,url,author, num_comments,points, objectId){
        this.title = title;
        this.author =author;
        this.num_comments = num_comments;
        this.points = points;
        this.objectId = objectId;
    }
}

const list = []

list.push(new Stuff('React',
        'https://reactjs.org',
        'Jordan Walke',
        2, 4, 0))

list.push(new Stuff('Redux',
        'https://redux.js.org',
        'Dan Abramov, Andrew Clark',
        2,5,1))

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);

    onDismiss(id){
        const isNotId = item => item.objectId !== id;
        const updatedList = this.state.list.filter(isNotId);
    }
  }

  render(){
    const text = "Welcome to the Road to learn React";
    const user = { first : 'Jason', last : 'H'}
    return (
      <div className="App">
          {this.state.list.map((item) =>
              <div key={item.objectId}>
                  <span>
                      <a href={item.url}>{item.title} </a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                  <span>
                      <button
                          onClick={() => this.onDismiss(item.objectID)}
                          type="button">
                          Dismiss
                      </button>
                  </span>
              </div>)}
      </div>);
  }
}

export default App;

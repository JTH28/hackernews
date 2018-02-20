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
  construstor(props){
    super(props);

    this.state = {
        list: list
    }
  }

  render(){
    const text = "Welcome to the Road to learn React";
    const user = { first : 'Jason', last : 'H'}
    return (
      <div className="App">
          {list.map((item) =>
              <div key={item.objectId}>
                  <span>
                      <a href={item.url}>{item.title} </a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
              </div>)}
      </div>);
  }
}

export default App;

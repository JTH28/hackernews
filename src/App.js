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

const list = [
    {
        title:'React',
        url: 'https://reactjs.org',
        author:'Jordan Walke',
        num_comments: 2,
        points: 4,
        objectId: 0,
    },

    {
        title:'Redux',
        url: 'https://redux.js.org',
        author:'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectId: 1,
    }
];

/*
list.push(new Stuff('React',
        'https://reactjs.org',
        'Jordan Walke',
        2, 4, 0))

list.push(new Stuff('Redux',
        'https://redux.js.org',
        'Dan Abramov, Andrew Clark',
        2,5,1))
*/

const isSearched = searchTerm => item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        list,
        searchTerm: '',
    };
  }

  onDismiss = id => {
      const isNotId = item => item.objectId !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
  }

  onSearchChange = event => {
      this.setState({ searchTerm: event.target.value});
  }


  render(){
    return (
        <div className="App">
            <form>
                <input
                    type="text"
                    onChange={this.onSearchChange}
                />
            </form>

            {this.state.list.filter(isSearched(this.state.searchTerm)).map((item) =>
                <div key={item.objectId}>
                    <span>
                        <a href={item.url}>{item.title} </a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    <span>
                        <button
                            onClick={() => this.onDismiss(item.objectId)}
                        type="button">
                            Dismiss
                        </button>
                    </span>
                </div>)}
        </div>);
    }
}

export default App;

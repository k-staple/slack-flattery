import React, { Component } from 'react';

import './App.css'
import Main from './Main'

class App extends Component {
  constructor(){
    super();

    this.state = {
      user: {
        uid: '3jas9w3kp',
        displayName: 'Daniel',
        email: 'dandantherunningman@hotmail.com'
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;

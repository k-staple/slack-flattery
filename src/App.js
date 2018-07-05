import React, { Component } from 'react';

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

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
         
        <SignIn user={this.state.user} />
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;

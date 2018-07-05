import React, { Component } from 'react';

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor(){
    super();

    const user = JSON.parse(localStorage.getItem('user'));

    this.state = {
      user: user || {},
    };
  }

  handleAuth = (user) => {
    this.setState({user})
    localStorage.setItem('user', JSON.stringify(user))
  }

  areSignedIn = () => {
    return this.state.user.uid
  }

  signOut = () => {
    this.setState({user: ''})
  }

  render() {
    return (
      <div className="App">
         {
           this.areSignedIn()  
            ? <Main user={this.state.user} signOut={this.signOut} />
            : <SignIn user={this.state.user} />
         }
        
        
      </div>
    );
  }
}

export default App;

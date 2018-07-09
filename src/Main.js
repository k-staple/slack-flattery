import React, { Component } from 'react';

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component  {
    state = {
      room: {
          name: 's3afternoon',
          description: 'Ask questions and share code',
      },
      rooms: {
        s3afternoon: {
            name: 's3afternoon',
          description: 'Ask questions and share code',
        },
        general: {
            name: 'General',
          description: 'Chat about whatever',
        },
        random: {
            name: 'random',
          description: 'cat gifs, etc.',
        },
      },
    }

    setCurrentRoom = (roomName) => {
        const room = this.state.rooms[roomName];
        this.setState({ room })
    }

    render(){
        return (
            <div className="Main" style={styles}>
              <Sidebar user={this.props.user} rooms={this.state.rooms}/>
              <Chat user={this.props.user} room={this.state.room}/>
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main
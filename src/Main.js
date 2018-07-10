import React, { Component, Fragment } from 'react';

import Sidebar from './Sidebar'
import Chat from './Chat'
import RoomForm from './RoomForm'
import base from './base'

class Main extends Component  {
    state = {
      room: {
          name: 's3afternoon',
          description: 'Ask questions and share code',
      },
      rooms: {},
      showRoomForm: false,
    }

    showRoomForm = () => {
        this.setState({ showRoomForm: true});
    }

    hideRoomForm = () => {
        this.setState({ showRoomForm: false});
    }

    addRoom = room => {
        const rooms = {...this.state.rooms}
        rooms[room.name]
    }

    componentDidMount(){
        this.roomsRef = base.syncState(
          'rooms',
          {
              context: '',
              state: '',
              defaultValue: {
                general: {
                  name: 'General',
                  description: 'Chat about whatever',
                },
              }
          }

        );

    }

    componentWillUnmount(){


    }

    setCurrentRoom = (roomName) => {
        const room = this.state.rooms[roomName];
        this.setState({ room })
    }

    render(){
        return (
            <div className="Main" style={styles}>
              <div>
                <RoomForm addRoom={this.addRoom} hideRoomForm={this.hideRoomForm}/>
              </div>
              {/* <Sidebar user={this.props.user} rooms={this.state.rooms} signOut={this.props.signOut} setCurrentRoom={this.setCurrentRoom}/>
              <Chat user={this.props.user} room={this.state.room}/> */}
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
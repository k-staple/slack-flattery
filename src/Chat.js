import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from 'base'

class Chat extends Component {
  constructor(){
      super();

      this.state= {
        messages: [
            {
                id: 1,
                user: {
                    uid: 'lskajf;sei',
                    displayName: 'Kathryn',
                    email: 'k@gmail.com'
                },
                body: 'hey wats up yellow',
            },
            
            {   id: 2,
                user: {
                    uid: 'ioe;a3t',
                    displayName: 'Dana',
                    email: 'idk@gmail.com'
                },
                body: 'purrrrple rain purrrrrrrrrple rain',}
        
        ] 
      }
  }

  componentDidMount(){
      this.messagesRef=base.syncState(
          'MessagesDatabaseTitle',
          {
            //sync the state of THIS component
            context: this,  
            state: 'messages',
            asArray: 'true',
          }
      )
  }

  componentWillUnmount(){
      base.removeBinding(this.messagesRef)
  }

  addMessage = (body) => {
      const messages= [...this.state.messages];
      messages.push({
          id: `${this.props.user.uid}-${Date.now()}`,
          user: this.props.user,
          body: body,
      })

      this.setState({messages: messages});
    }

  render(){
    return (
      <div className="Chat">
        <ChatHeader room={this.props.room}/>
        <MessageList messages={this.state.messages} room={this.props.room}/>
        <MessageForm addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default Chat
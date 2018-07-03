import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

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
                    email: 'kathryn.stapleton777@gmail.com'
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
  render(){
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm />
      </div>
    );
  }
}

export default Chat
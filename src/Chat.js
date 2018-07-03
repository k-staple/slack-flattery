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

  addMessage = (body) => {
      const messages= [...this.state.messages];
      messages.push({
          id: `${user.uid}-${Date.now()}`,
          user: this.props.user,
          body: body,
      })

      this.setState({messages: messages});
    }

  render(){
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default Chat
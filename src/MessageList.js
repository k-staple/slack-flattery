import React, { Component } from 'react'

import Message from './Message'

class MessageList extends Component {
  componentDidUpdate(prevProps){
      if (prevProps.messages.length < this.props.messages.length){
        this.scroollToBottom();
      }
  }

   // smooth and other properites don't work in internet explorer
   scroollToButton = () => {
       this.messages.End.scrollIntoView({ behavior: 'smooth'})
   }
   render(){
    return (
    <div className="MessageList" style={styles.MessageList}>
        {/* {messages.map(msg => (
          <Message message={msg} key={msg.id}/>
        ))} */}
      <div ref={el => this.messagesEnd = el}></div>

    </div>
    )
    }

}

const styles = {
    MessageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
      },
      
    roomAnnouncement: {
        padding: '2rem 1rem',
      },
      
    h3: {
        fontSize: '1.5rem',
      }

}

export default MessageList
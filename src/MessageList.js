import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
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
    
    return (
    <div className="MessageList">
        {messages.map(msg => (
          <Message message={msg} key={msg.id}/>
        ))}
    </div>
    )

}

export default MessageList
import React from 'react'

import Avatar from './Avatar'

const Message = ({message}) => {
    return (
        <div className="Message" style={styles.Message}>
          <Avatar user={message.user} />
          <div style={styles.avatar}>
          </div>
          <div style={styles.details}>
            {message.user.displayName}: {message.body}
          </div>
        </div>
    )
}

const styles = {
    avatar: {
        background: "url(https://api.adorable.io/avatars/32/davey@getfretless.com)"
    },
    
    Message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
    },
        
    details: {
        flex: 1,
        paddingLeft: '0.5rem',
    }, 

}

export default Message
import React from 'react'

const Message = (props) => {
    return (
        <div className="Message" style={styles.Message}>
          <div style={styles.avatar}>
          </div>
          <div style={styles.details}>
            {props.message.user.displayName}: {props.message.body}
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
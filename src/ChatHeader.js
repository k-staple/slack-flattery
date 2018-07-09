import React from 'react'

const ChatHeader = ({ room }) => {
    return (
    <div className="chatHeader" style={styles.chatHeader}>
        <div className="roomInfo">
        <h2>#{room.name}</h2>
        <p>{room.description}</p>
        </div>
    </div>
    )

}

const styles = {
  chatHeader: {
    backgroundColor: 'rgb(108, 117, 132)',
    padding: 0,
  },
};

export default ChatHeader
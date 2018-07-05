import React from 'react'

const ChatHeader = () => {
    return (
    <div className="chatHeader" style={styles.chatHeader}>
        <div className="roomInfo">
        <h2>#general</h2>
        <p>Announcements and general chat</p>
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
import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import Room from './Room'

const SidebarLinks = ({rooms, setCurrentRoom, showRoomForm}) => {
  const handleClick = ev => {
    ev.preventDefault();
    setCurrentRoom(roomName);
  }


  return (
    <nav className={`RoomList ${css(styles.roomList)}`}
     >
      <div>
        <h2 className={css(styles.h2)}>
            Rooms
        </h2>
        <button className="header" onClick={showRoomForm}>
          <i className="fas fa-plus" title="Add a room"></i>
        </button>
      </div>
      <ul className={css(styles.list)}>
        {
          Object.keys(rooms).map(
            roomName => (
              <li className={css(styles.item)} key={roomName}>
                <a href="#" className={css(styles.link)}>roomName</a>
              </li>
            )
          )
        }
    
      </ul>
    </nav>
          
  );
}

const styles = StyleSheet.create({
  roomList: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  header: {
    
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})


export default SidebarLinks
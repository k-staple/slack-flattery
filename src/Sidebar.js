import React, { Component } from 'react';

const Sidebar = (props) =>  {

    return (
    <aside class="Sidebar" style={styles.sidebar}>
      <div class="UserInfo">
        <div
          class="Avatar"
        ></div>
        <div class="user">Davey</div>
        <a href="#">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
      <h1 style={styles.h1}>XTBC 18</h1>
      <nav class="RoomList" style={styles.children}>
        <h2>Rooms</h2>
        <ul>
          <li><a href="#">general</a></li>
          <li><a href="#">random</a></li>
        </ul>
      </nav>
    </aside>
    )

}

const styles = {
  sidebar: {
    backgroundColor: '#333344',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '12rem',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },

  children: {
    padding: '0 1rem',
  },

  h1: {
    color: 'white',
    fontSize: '1.2rem',
    marginTop: 0,
    padding: '0 1rem',
  },
}

export default Sidebar
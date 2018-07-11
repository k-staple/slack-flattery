import React from 'react'

const Metadata = ({ message }) => {
   return (
    <div class="Metadata">
    <div class="user">Dana</div>
    <div class="time">{moment()}</div>
  </div>
   )

}

export default Metadata
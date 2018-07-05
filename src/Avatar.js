import React from 'react'

const Avatar (props) => {
  const imageURL = https://api.adorable.io/avatars/40/abott@adorable.png;

  return()  
    <div className="Avatar" style={{
        backgroundImage: `url(${imageUrl})`, 
        ...styles,
    }}></div>
  );
}

const styles = {
    height: 40px,
    width: 40px,
    fontSize: 1rem,
    borderRadius: 20px,
}

export default Avatar
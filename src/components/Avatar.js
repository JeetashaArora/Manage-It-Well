import "./Avatar.css"
import React from 'react'

function Avatar({src}) {
  //returning the template
  return (
    <div className="avatar">
      {/* Avatar of the user */}
       <img src={src} alt="user avatar"/>
    </div>
  )
}

export default Avatar
import React from 'react'

import './ResponseMessage.css';

export const Message = ({text, bgColor}) => {
  return (
    <div className={`messageContainer ${bgColor}`}>
        <p>{text}</p>
    </div>
  )
}

import React from 'react'

const ChatBox = ({messages}) => {
  return (
    <div className='chatbox-container'>
      {messages.map((msg, idx) =>(
        <div key={idx} className='chatbox-message'>
            <strong>{msg.sender}: </strong>
            <span>{msg.message}</span>
        </div>
      ))}
    </div>
  )
}

export default ChatBox

import React from 'react'
import { useState } from 'react'

const ChatInput = ({sendMessage}) => {
    const [message, setMessage] = useState("")
    const handleSend =() => {
        if(!message) return;
        sendMessage(message);
        setMessage("")
    }

    const handleEnter =(e) => {
        if (e.key === "Enter") handleSend()
    }
    return (
    <div className='chatinput-container'>
      <input 
      type='text'
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={handleEnter}
      placeholder='Type your Message...'
      className='chatinput-input' 
      />
      <button onClick={handleSend} className='chatinput-button'></button>
    </div>
  )
}

export default ChatInput

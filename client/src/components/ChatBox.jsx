import React from 'react'
import { socket } from "../utils/socket"

const ChatBox = ({ messages }) => {
  return (
    <div className='chatbox-container'>
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`chatbox-message ${msg.sender === socket.id ? "sent" : "received"}`}
        >
          <div className="message-sender">{msg.sender}</div>
          <div className="message-text">{msg.message}</div>
        </div>
      ))}
    </div>
  )
}
export default ChatBox


// < div className = 'chatbox-container' >
// {
//   messages.map((msg, idx) => (
//     <div key={idx} className='chatbox-message'>
//       <strong>{msg.sender}: </strong>
//       <span>{msg.message}</span>
//     </div>
//   ))
// }
//   </div >
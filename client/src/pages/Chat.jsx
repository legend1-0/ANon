import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ChatBox from "../components/ChatBox"
import ChatInput from "../components/ChatInput"
import { socket } from '../utils/socket'
const Chat = () => {
   const { roomId } = useParams();
   const [messages, setMessages] = useState([])
   const [roomExpired, setRoomExpired] = useState(false)
   useEffect(() => {
      socket.emit("join_room", roomId, (res) => {
         if (!res.success) alert(res.message);
      });
      socket.on("receive_message", (msg) => {
         setMessages((prev) => [...prev, msg]);
      })

      socket.on("room_expired", () => {
         setRoomExpired(true);
      })
      return () => {
         socket.off("receive_message")
         socket.off("room_expired")

      }
   }, [roomId])

   const sendMessage = (message) => {
      socket.emit("send_message", { roomId, message })
   }
   return (
      <>
         <div className="ghost-bg"></div>

         <div className='chat-container'>
            <h2 className='chat-header'>Room ID {roomId}</h2>

            {roomExpired ? (
               <p className='chat-expired'>This chat has expired</p>
            ) : (
               <>
                  <ChatBox messages={messages} />
                  <ChatInput sendMessage={sendMessage} />
               </>
            )}
         </div>
      </>
   )
}

export default Chat
import React from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../utils/socket";
const Home = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    socket.emit("create_room", (roomId) => {
      navigate(`/chat/${roomId}`);
    });
  };
  return (
    <>
      <div className="ghost-bg" />
      <div className="home-container">
        <h1 className="home-title">GhostChat</h1>
        <p style={{ fontSize: '1.4rem', opacity: 0.9, marginBottom: '2.5rem' }}>
          Disappear into anonymous shadows
        </p>
        <button className="home-button" onClick={handleCreateRoom}>
          Create Chat Room
        </button>
      </div>
    </>
  );
};

export default Home;

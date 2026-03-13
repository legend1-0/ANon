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
    <div className="home-container">
      <h1 className="home-title"> GhostChat</h1>
      <button className="home-button" onClick={handleCreateRoom}>
        Create Chat Room
      </button>
    </div>
  );
};

export default Home;

const rooms = {}

function createRoom(roomId) {
    rooms[roomId] ={
        users: [],
        lastActivity: Date.now()
    };
    return rooms[roomId]
}

function joinRoom(roomId , socketId) {
    if(!rooms[roomId]) return false;
    if(rooms[roomId].users.length >= 100) return false;
    rooms[roomId].users.push(socketId);
    rooms[roomId].lastActivity = Date.now();
    return true
}

function removeUser(roomId, socketId) {
    if (!rooms[roomId] ) return;
rooms[roomId].users = rooms[roomId].users.filter(id => id !== socketId);
rooms[roomId].lastActivity = Date.now()
}

function updateActivity (roomId) {
    if(!rooms[roomId]) return;
    rooms[roomId].lastActivity = Date.now()
}

function deleteRoom (roomId) {
  delete rooms[roomId]
}

function getRoom(roomId) {
    return rooms[roomId]
}

module.exports ={
    createRoom,
    rooms,
    joinRoom,
    deleteRoom,
    removeUser,
    getRoom,
    updateActivity
}
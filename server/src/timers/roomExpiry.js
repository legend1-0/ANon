const {rooms, deleteRoom } = require('../rooms/roomManager.js');


function startRoomExpiry(io) {
    setInterval(()=> {
        const now = Date.now();
        for (const roomId in rooms) {
            if(now - rooms[roomId]. lastActivity > 100000) {
                    io.to(roomId).emit('room_expired');
                    deleteRoom(roomId)
                    console.log(`Deleted inactive room: ${roomId}`);
                    
            }
        }
    }, 10000)
}

module.exports = startRoomExpiry;
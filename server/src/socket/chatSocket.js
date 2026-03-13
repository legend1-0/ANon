const {
  createRoom,
  rooms,
  joinRoom,
  deleteRoom,
  removeUser,
  getRoom,
  updateActivity,
} = require("../rooms/roomManager.js");


module.exports = function (io) {
    io.on('connection', socket => {
        console.log(`New User Connected`, socket.id);
        
        socket.on('create_room', (callback)=> {
            const roomId = require('../utils/generateRoomId.js')();
            createRoom(roomId);
            callback(roomId)
        });

        
       socket.on('join_room', (roomId, callback)=> {
        const success = joinRoom(roomId, socket.id);
            if (success) {
                socket.join(roomId);
                callback({success: true});
                io.to(roomId).emit('user_joined', socket.id)
            } else {
                callback({success: false, message: `Room is full or does not exist`})

            }
       }) ;

       socket.on('send_message', ({roomId, message}) => {
        if (!roomId || !message) return;
        updateActivity(roomId);
        io.to(roomId).emit('receive_message', {message, sender: socket.id});
       });

       socket.on('disconnect', ()=> {
        console.log('User Disconnected', socket.id);

        for(let roomId in require('../rooms/roomManager.js').rooms)
            removeUser(roomId, socket.id)
        
       })
    })
}
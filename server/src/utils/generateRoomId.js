function generateRoomId () {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let id = '';
    for(let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return id;
}

module.exports = generateRoomId;
const { Room } = require("./Room");
const uuid = require("uuid");

class RoomManager {
  constructor() {
    this.Rooms = [];
  }

  createRoom(user) {
    const currId = uuid.v4();
    const currRoom = new Room(currId);
    this.Rooms.push(currRoom);
    currRoom.addUser(user);
    return currId;
  }

  deleteRoom(roomId) {
    const index = this.Rooms.findIndex((room) => room.roomId === roomId);
    if (index !== -1) {
      const roomToDelete = this.Rooms[index];
      // Disconnect all users in the room
      roomToDelete.users.forEach((user) => {
        if (user.ws && user.ws.close) {
          user.ws.close();
        }
      });
      this.Rooms.splice(index, 1);
    }
  }

  getRoom(roomId) {
    return this.Rooms.find((room) => room.roomId === roomId);
  }

  listRooms() {
    return this.Rooms.map((room) => room.roomId);
  }
}

module.exports = { RoomManager };

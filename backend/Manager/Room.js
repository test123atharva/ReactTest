class Room {
  constructor(roomId) {
    this.roomId = roomId;
    this.participants = [];
  }

  addUser(user) {
    this.participants.push(user);
  }

  removeUser(user) {
    const index = this.participants.findIndex((p) => p.userID === user.userID);
    if (index !== -1) {
      this.participants.splice(index, 1);
    }
  }

  broadcastAllPositions() {
    const allPositions = this.participants.map((p) => ({
      userID: p.userID,
      pos: p.pos,
    }));

    const payload = JSON.stringify({
      type: "positionsUpdate",
      positions: allPositions,
    });

    this.participants.forEach((p) => {
      if (p.ws.readyState === p.ws.OPEN) {
        p.ws.send(payload);
      }
    });
  }
}

module.exports = { Room };

const express = require("express");
const { WebSocketServer } = require("ws");
const { RoomManager } = require("./Manager/RoomManager");
const { User } = require("./User/UserClass");

const PORT = 5000;
const app = express();
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const wss = new WebSocketServer({ server });
const roomManager = new RoomManager();

wss.on("connection", (ws) => {
  const currUser = new User(ws);
  let currentRoom = null;

  ws.on("message", (data) => {
    let currData;
    try {
      currData = JSON.parse(data);
    } catch {
      return ws.send(
        JSON.stringify({ type: "error", message: "Invalid JSON" })
      );
    }

    switch (currData.type) {
      case "create": {
        const roomId = roomManager.createRoom(currUser);
        currentRoom = roomManager.getRoom(roomId);
        ws.send(JSON.stringify({ type: "roomCreated", roomId }));
        break;
      }

      case "join": {
        const room = roomManager.getRoom(currData.roomId);
        if (room) {
          room.addUser(currUser);
          currentRoom = room;
          ws.send(JSON.stringify({ type: "roomJoined", roomId: room.roomId }));
          room.broadcastAllPositions();
        } else {
          ws.send(JSON.stringify({ type: "error", message: "Room not found" }));
        }
        break;
      }

      case "updatePos": {
        const [x, y] = currData.pos;
        currUser.updatePos(x, y);
        if (currentRoom) {
          currentRoom.broadcastAllPositions();
        }
        break;
      }

      default:
        ws.send(
          JSON.stringify({ type: "error", message: "Unknown message type" })
        );
    }
  });

  ws.send(JSON.stringify({ type: "connected" }));
});

const express = require("express");
const { WebSocketServer, CLOSING } = require("ws");
const { RoomManager } = require("./Manager/RoomManager");
const { User } = require("./User/UserClass");
const { Room } = require("./Manager/Room");

const PORT = 5000;
const app = express();
app.use(express.json());

const server = app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

const wss = new WebSocketServer({ server });

// no metadata for create Room type msg
// roomId for joinroom type msg

const roomManager = new RoomManager();
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const currData = JSON.parse(data);

    if (currData.type == "create") {
      //create  user
      //create room
      const currUser = new User(ws);

      const currRoomId = roomManager.createRoom(currUser);
      console.log(`room created with id ${currRoomId}`)

      // send roomId to the user
    }
    if (currData.type == "join") {
      //create user
      // join room
    
      const currUser = new User(ws);
      const currRoomId = currData.roomId
      const currRoomIdx = roomManager.Rooms.findIndex((i)=> i.roomId == currRoomId)
      const currRoom = roomManager.Rooms[currRoomIdx]
      currRoom.createRoom()


    }
    if (currData.type == "updatePos") {
      //broadcast pos in room
    }
  });

  ws.send("connected");
});

function main(ws) {}

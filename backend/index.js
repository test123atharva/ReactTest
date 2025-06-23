const express = require('express');
const { WebSocketServer } = require('ws');
const { RoomManager } = require('./Manager/RoomManager');
const PORT = 5000
const app = express()
app.use(express.json())

const server = app.listen(PORT,()=>{
  console.log(`running on ${PORT}`);
})

const wss = new WebSocketServer({server})

const roomManager = new RoomManager()
wss.on('connection',(ws)=>{

  

  

  ws.send('connected')
})



function SendSystemMessage(msg, ws, sender, receiver) {
  const message = {
    type: "system",
    sender: sender,
    receiver: receiver,
    message: msg,
  };
  ws.send(JSON.stringify(message));
}

function SendUserMessage(msg, ws, sender, receiver) {
  const message = {
    type: "user",
    sender: sender,
    receiver: receiver,
    message: msg,
  };
  ws.send(JSON.stringify(message));
}

function SendPosCoords(x, y, ws) {
  const msg = {
    type: "pos",
    x: x,
    y: y,
  };
  ws.send(JSON.stringify(msg));
}

module.exports = {
  SendSystemMessage,
  SendUserMessage,
  SendPosCoords,
};

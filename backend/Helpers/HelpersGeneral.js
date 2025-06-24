export function SendSystemMessage(msg, ws, sender, reciever) {
  //
}

function SendUserMessage(msg, ws, sender, reciever) {
  //
}

function SendPosCoords(x, y, ws) {
  //

  const msg = {
    type: "pos",
    x: x,
    y: y,
  };
  ws.send(JSON.stringify(msg));
}

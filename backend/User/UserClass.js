const { v4: uuidv4 } = require("uuid");

class User {
  constructor(ws) {
    this.userID = uuidv4();
    this.ws = ws;
    this.pos = [0, 0];
  }

  updatePos(x, y) {
    this.pos = [x, y];
  }

  send(message) {
    if (this.ws.readyState === this.ws.OPEN) {
      this.ws.send(message);
    }
  }
}

module.exports = { User };

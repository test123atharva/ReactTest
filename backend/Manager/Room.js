export class Room {
  constructor(roomId) {
    this.roomId = roomId;
    this.participants = [];
  }

  //object of the user class
  addUser(user) {
    this.participants.push(user);
  }

  removeUser(user) {
    const currId = user.id;
    const index = this.participants.findIndex((p) => p.id === currId);

    if (index !== -1) {
      this.participants.splice(index, 1);
    }
  }

  broadCastPositions(x,y){
    this.participants.map((i)=>{
      i.updatePos(x,y)
    })
  }

}
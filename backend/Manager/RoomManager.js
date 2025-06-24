import { Room } from "./Room"

export class RoomManager{
  constructor(){
    this.Rooms = []


  }

  createRoom(user){
    //create room object 
    //return unique room id 

    const currId = uuid.v4()
    const currRoom = new Room(currId)
    this.Rooms.push(currRoom)
    currRoom.addUser(user)
    return currId

  }

  deleteRoom(roomId){
    const currRoom = this.Rooms.findIndex((i)=> i.roomId == roomId)
    // disconnect members of the room then delete it 
    this.Rooms.splice(currRoom,1)
  }
}
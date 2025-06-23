export class Room{
    constructor(roomID , members=[]){
        this.members = members
        this.roomId = roomID
    }

    addMember(user){
        this.members.push(user)
    }
    broadCastMessage(members){
        members.map(()=>{
            
        })
    }


}
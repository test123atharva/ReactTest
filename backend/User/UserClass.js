import { SendSystemMessage } from "../Helpers/HelpersGeneral"

export class User{
    constructor(username , id , ws , pos=[0,0]){

        this.username = username
        this.id = id
        this.ws = ws 
        this.pos = [0,0]

    }


 

    updatePos(x,y){

        this.pos(x,y)
        
    }

    sendMessage(msg){
        SendSystemMessage(msg,this.ws , system)
    }
}
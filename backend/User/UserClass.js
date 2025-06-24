const uuid = require('uuid')
export class User{

  constructor( ws){

    const currId = uuid.v4()
    this.userID = userID
    this.ws = ws 
    this.pos = [0,0]
  }

  updatePos(x,y){
    this.pos = [x,y];
    console.log(`updated pos ${x +" "+ y}`);
  }



}
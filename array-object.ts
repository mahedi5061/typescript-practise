const numbers:number[] = [10,20,30,5,66,2,44];
let newNum:number[]=[];
  for (let  i = 0; i < numbers.length; i++) {
      const element:number = numbers[i];
      if(element>newNum.length){
        //   newNum=element;
      }
      
  }

  //Object
  let player:{
      name:string,
      age:number
  }
 player ={
      name:'Smith',
      age:34
  }
 

  interface Player{
      name:string,
      age:number,
      salary:number,
      wife?:string,
      isPlaying:boolean
  }
   
  const messi={
      name:'Lionel Messi',
      age:34,
      salary:4500000,
      wife:'some one',
      isPlaying:true
  }
  const ronaldo={
    name:'Ronaldo',
    age:34,
    salary:5500000,
    isPlaying:true
}
   function playerInfo(player:Player){
       return player.salary*0.1;
   }
   const poorPlayer={
       salary:30000,
       travel:50
   }
   playerInfo(messi);

   //class

class Person{
    name:string;
   private _friend:string
    constructor(name:string,friend:string){
        this.name=name;
        this._friend=friend;
    }
    getName():string{
       return this.name;
       return this._friend;
       
        
    }
}
const names=new Person('abul kalam','ami');
console.log(names.);

